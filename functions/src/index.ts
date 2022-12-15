import * as functions from "firebase-functions";
import * as cors from "cors";

const admin = require("firebase-admin");
admin.initializeApp();

//enabling cors
const corsHandler = cors({ origin: '*' });

export const addWallet = functions.region("europe-west1").https.onRequest((request, response) => {
    corsHandler(request, response, async () => {
        //get realtime database

        const db = admin.database();
        const ref = db.ref("users");

        const childValue = request.body.data.value;
        //response.send(childValue);

        ref.orderByValue().equalTo(childValue).once('value', (snapshot: { exists: () => any; }) => {
            if (!snapshot.exists()) {
                // If the child does not exist, add it to the reference
                ref.push(childValue);
            }
        });
    });
});

export const countWallets = functions.region("europe-west1").https.onRequest((request, response) => {
    corsHandler(request, response, async () => {
        const db = admin.database();
        const ref = db.ref("users");

        //count number of childs
        ref.once('value', (snapshot: { numChildren: () => any; }) => {
            response.send(snapshot.numChildren().toString());
        });
    });
});
