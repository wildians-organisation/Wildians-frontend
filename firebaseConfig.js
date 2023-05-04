import * as config from "./config/config.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: `${config.GCPAPIKEY}`,
    authDomain: `${config.GCPAUTHDOMAIN}`,
    databaseURL: `${config.GCPDATABASEURL}`,
    projectId: `${config.GCPPROJECTID}`,
    storageBucket: `${config.GCPSTORAGEBUCKET}`,
    messagingSenderId: `${config.GCPMESSAGINGSENDERID}`,
    appId: `${config.GCPAPPID}`,
    measurementId: `${config.MEASUREMENTID}`
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

let analytics;
if (firebaseConfig?.projectId) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    if (app.name && typeof window !== "undefined") {
        analytics = getAnalytics(app);
    }
}

module.exports = { firestore, analytics };
