import * as functions from "firebase-functions";
import { database } from "firebase-admin";
import DataSnapshot = database.DataSnapshot;
import { corsHandler } from "./utils";
import { getRefStatsConnections, getRefUsers } from "../data/data";

// Add or update a user when sign in
export const addWallet = functions
    .region("europe-west1")
    .https.onRequest((request, response) => {
        corsHandler(request, response, async () => {
            const ref = getRefUsers();
            const refStats = getRefStatsConnections();

            const walletAddress = request.body.data.value;
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

            await refStats.once("value", (snapshot: DataSnapshot) => {
                const refLastTwoWeeks = snapshot
                    .child("lastTwoWeeksConnections")
                    .child("current");
                refLastTwoWeeks.ref.set(refLastTwoWeeks.val() + 1);
            });

            await refStats.once("value", (snapshot: DataSnapshot) => {
                const refLastTwoWeeks = snapshot
                    .child("lastMonthConnections")
                    .child("current");
                refLastTwoWeeks.ref.set(refLastTwoWeeks.val() + 1);
            });

            if (!exist) {
                ref.push({
                    walletAddress: walletAddress,
                    firstConnection: now.getTime(),
                    lastConnection: now.getTime()
                });
            }

            response.sendStatus(200);
        });
    });
