import * as functions from "firebase-functions";
import { database } from "firebase-admin";
import DataSnapshot = database.DataSnapshot;
import { corsHandler, initializeYearConnections } from "./utils";
import { getRefStatsConnections, getRefUsers } from "../data/data";

const UTC = "Africa/Abidjan";

export const countWallets = functions
    .region("europe-west1")
    .https.onRequest((request, response) => {
        corsHandler(request, response, async () => {
            const ref = getRefUsers();

            //count number of childs
            ref.once("value", (snapshot: { numChildren: () => any }) => {
                response.send({ data: snapshot.numChildren().toString() });
            });
        });
    });

export const setupLastTwoWeeks = functions
    .region("europe-west1")
    .pubsub.schedule("0 0 * * 0")
    .timeZone(UTC)
    .onRun(async (context) => {
        const ref = getRefStatsConnections();

        await ref.once("value", async (snapshot: DataSnapshot) => {
            if (snapshot.exists()) {
                await ref.child("lastTwoWeeksConnections").set({
                    last: snapshot
                        .child("lastTwoWeeksConnections")
                        .child("current")
                        .val(),
                    current: 0
                });
            } else {
                await ref.child("lastTwoWeeksConnections").set({
                    last: 0,
                    current: 0
                });
            }
        });
    });

export const setupLastMonth = functions
    .region("europe-west1")
    .pubsub.schedule("0 0 * * 0")
    .timeZone(UTC)
    .onRun(async (context) => {
        const ref = getRefStatsConnections();

        await ref.once("value", async (snapshot: DataSnapshot) => {
            if (snapshot.exists()) {
                await ref.child("lastMonthConnections").set({
                    last: snapshot
                        .child("lastMonthConnections")
                        .child("current")
                        .val(),
                    current: 0
                });
            } else {
                await ref.child("lastMonthConnections").set({
                    last: 0,
                    current: 0
                });
            }
        });
    });

// Get number of connections of the current month
export const getConnectionStats = functions
    .region("europe-west1")
    .https.onRequest((request, response) => {
        corsHandler(request, response, async () => {
            let yearConnections: number[] = initializeYearConnections();

            const ref = getRefUsers();

            const now = new Date();
            const currentYear = now.getFullYear();

            // Get a snapshot of the path
            await ref.once("value", (dataSnapshot: DataSnapshot) => {
                dataSnapshot.forEach((snapshot: DataSnapshot) => {
                    const snapshotValue = snapshot.val();

                    const currentUserDate = new Date(
                        snapshotValue.lastConnection
                    );
                    if (currentUserDate.getFullYear() === currentYear) {
                        ++yearConnections[currentUserDate.getMonth()];
                    }
                });
            });

            response.send({
                yearConnections
            });
        });
    });
