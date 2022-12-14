import * as functions from "firebase-functions";

const admin = require("firebase-admin");
admin.initializeApp();

export const addWallet = functions.region("europe-west1").https.onRequest((request, response) => {
    //get realtime database

    const db = admin.database();
    const ref = db.ref("users");

    const childValue = request.body.value;
    //response.send(childValue);

    ref.orderByValue().equalTo(childValue).once('value', (snapshot: { exists: () => any; }) => {
        if (!snapshot.exists()) {
            // If the child does not exist, add it to the reference
            ref.push(childValue);
        }
    });

    // Return a success response
    response.send(200);
});

export const countWallets = functions.region("europe-west1").https.onRequest((request, response) => {
    const db = admin.database();
    const ref = db.ref("users");

    //count number of childs
    ref.once('value', (snapshot: { numChildren: () => any; }) => {
        response.send(snapshot.numChildren().toString());
    });
});
