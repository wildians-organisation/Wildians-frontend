import * as functions from "firebase-functions";
import { database } from "firebase-admin";
import DataSnapshot = database.DataSnapshot;
import { corsHandler } from "./utils";
import { getRefUsers } from "../data/data";

// Add or update a user when sign in
export const addWallet = functions
    .region("europe-west1")
    .https.onRequest((request, response) => {
        corsHandler(request, response, async () => {
            const ref = getRefUsers();

            const walletAddress = request.body.data.value;
            const now = Date.now();
            let exist = false;

            await ref.once("value", (dataSnapshot: DataSnapshot) => {
                dataSnapshot.forEach((snapshot) => {
                    if (snapshot.val().walletAddress === walletAddress) {
                        exist = true;
                        snapshot.ref.update({
                            lastConnection: now
                        });
                    }
                });
            });

            if (!exist) {
                ref.push({
                    walletAddress: walletAddress,
                    firstConnection: now,
                    lastConnection: now
                });
            }

            response.sendStatus(200);
        });
    });
