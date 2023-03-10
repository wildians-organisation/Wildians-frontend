import * as functions from "firebase-functions";
import * as cors from "cors";
import { database, firestore } from "firebase-admin";
import DataSnapshot = database.DataSnapshot;
import Timestamp = firestore.Timestamp;
const admin = require("firebase-admin");
admin.initializeApp();

// Enable CORS
const corsHandler = cors({ origin: "*" });

// Add or update a user when sign in
export const addWallet = functions
    .region("europe-west1")
    .https.onRequest((request, response) => {
        corsHandler(request, response, async () => {
            // Get real time database
            const db = admin.database();

            const ref = db.ref("users");

            const walletAddress = request.body.data.value;
            const now = Timestamp.now();
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
        });
    });

export const countWallets = functions
    .region("europe-west1")
    .https.onRequest((request, response) => {
        corsHandler(request, response, async () => {
            const db = admin.database();
            const ref = db.ref("users");

            //count number of childs
            ref.once("value", (snapshot: { numChildren: () => any }) => {
                response.send({ data: snapshot.numChildren().toString() });
            });
        });
    });

// Get all users data from the database.
export const getUsers = functions
    .region("europe-west1")
    .https.onRequest((request, response) => {
        corsHandler(request, response, async () => {
            const db = admin.database();
            const ref = db.ref("users");

            await ref.once("value", (dataSnapshot: DataSnapshot) => {
                response.send(dataSnapshot.val());
            });
        });
    });

// Get number of connections of the current month
export const getUsersMonth = functions
    .region("europe-west1")
    .https.onRequest((request, response) => {
        corsHandler(request, response, async () => {
            // Connect to the db
            const db = admin.database();

            // Go to the path "users"
            const ref = db.ref("users");
            let count = 0;
            const currentMonth = Timestamp.now().getMonth();

            // Get a snapshot of the path
            await ref.once("value", (dataSnapshot: DataSnapshot) => {
                dataSnapshot.forEach((snapshot: DataSnapshot) => {
                    const snapshotValue = snapshot.val();
                    const currentUserTimestamp = Timestamp(
                        snapshotValue.seconds.toInt(),
                        snapshotValue.nanoseconds.toInt()
                    );
                    if (currentUserTimestamp.getMonth() === currentMonth) {
                        count++;
                    }
                });
            });

            response.send(count);
        });
    });
