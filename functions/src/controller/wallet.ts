import * as functions from "firebase-functions";
import { database } from "firebase-admin";
import DataSnapshot = database.DataSnapshot;
import { getRefUsers } from "../data/data";

// Add or update a user when sign in
export const addWallet = functions
    .region("europe-west1")
    .https.onCall(async (data, context) => {
        const ref = getRefUsers();

        const walletAddress = data.value;
        const now = new Date();
        let exist = false;

        await ref.once("value", (dataSnapshot: DataSnapshot) => {
            dataSnapshot.forEach((snapshot) => {
                if (snapshot.val().walletAddress === walletAddress) {
                    exist = true;
                    snapshot.ref.update({
                        lastConnection: now.getTime()
                    });
                }
            });
        });

        if (!exist) {
            ref.push({
                walletAddress: walletAddress,
                firstConnection: now.getTime(),
                lastConnection: now.getTime()
            });
        }
    });
