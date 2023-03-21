import * as functions from "firebase-functions";
import { initializeYearConnections } from "../utils/utils";
import { database } from "firebase-admin";
import DataSnapshot = database.DataSnapshot;
import { corsHandler } from "./utils";
import { getRefUsers } from "../data/data";

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

// Get number of connections of the current month
export const getConnectionStats = functions
    .region("europe-west1")
    .https.onRequest((request, response) => {
        corsHandler(request, response, async () => {
            let yearConnections: number[] = initializeYearConnections();
            let lastTwoWeeksConnections = 0;
            let lastOneMonthConnections = 0;

            const ref = getRefUsers();

            const now = new Date();
            const currentYear = now.getFullYear();
            const nowMinusTwoWeeks = new Date(now.getDate() - 14);
            const nowMinusOneMonth = new Date(now.getDate() - 30);

            // Get a snapshot of the path
            await ref.once("value", (dataSnapshot: DataSnapshot) => {
                dataSnapshot.forEach((snapshot: DataSnapshot) => {
                    const snapshotValue = snapshot.val();
                    const currentUserDate = new Date(
                        snapshotValue.lastConnection
                    );
                    if (currentUserDate.getFullYear() === currentYear) {
                        ++yearConnections[currentUserDate.getMonth()];

                        if (
                            currentUserDate.getTime() >=
                            nowMinusTwoWeeks.getTime()
                        ) {
                            ++lastTwoWeeksConnections;
                        }
                        if (
                            currentUserDate.getTime() >=
                            nowMinusOneMonth.getTime()
                        ) {
                            ++lastOneMonthConnections;
                        }
                    }
                });
            });

            response.send({
                yearConnections,
                lastTwoWeeksConnections,
                lastOneMonthConnections
            });
        });
    });
