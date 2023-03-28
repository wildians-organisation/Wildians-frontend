import * as functions from "firebase-functions";
import { database } from "firebase-admin";
import DataSnapshot = database.DataSnapshot;
import { addDays, initializeYearConnections } from "./utils";
import { getRefUsers } from "../data/data";

export const countWallets = functions
    .region("europe-west1")
    .https.onCall(async (data, context) => {
        const ref = getRefUsers();

        //count number of childs
        await ref.once("value", (snapshot: { numChildren: () => any }) => {
            return { data: snapshot.numChildren().toString() };
        });
    });

// Get number of connections of the current month
export const getConnectionStats = functions
    .region("europe-west1")
    .https.onCall(async (data, context) => {
        let yearConnections: number[] = initializeYearConnections();
        let lastTwoWeeksConnections = 0;
        let lastOneMonthConnections = 0;

        const ref = getRefUsers();

        const now = new Date();
        const currentYear = now.getFullYear();
        const nowMinusTwoWeeks = addDays(now, -14);
        const nowMinusOneMonth = addDays(now, -30);

        // Get a snapshot of the path
        await ref.once("value", (dataSnapshot: DataSnapshot) => {
            dataSnapshot.forEach((snapshot: DataSnapshot) => {
                const snapshotValue = snapshot.val();
                const currentUserDate = new Date(snapshotValue.lastConnection);
                if (currentUserDate.getFullYear() === currentYear) {
                    ++yearConnections[currentUserDate.getMonth()];

                    if (
                        currentUserDate.getTime() >= nowMinusTwoWeeks.getTime()
                    ) {
                        ++lastTwoWeeksConnections;
                    }
                    if (
                        currentUserDate.getTime() >= nowMinusOneMonth.getTime()
                    ) {
                        ++lastOneMonthConnections;
                    }
                }
            });
        });

        return {
            yearConnections,
            lastTwoWeeksConnections,
            lastOneMonthConnections
        };
    });
