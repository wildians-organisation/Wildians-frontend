import * as functions from "firebase-functions";
import * as cors from "cors";
import { database, firestore } from "firebase-admin";
import DataSnapshot = database.DataSnapshot;
import Timestamp = firestore.Timestamp;
const admin = require("firebase-admin");
admin.initializeApp();

// Enable CORS
const corsHandler = cors({ origin: "*" });

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
