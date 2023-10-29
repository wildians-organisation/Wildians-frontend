import * as config from "./config/config.tsx";
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

export const firestore = getFirestore();

if (typeof window !== "undefined") {
    const analytics = getAnalytics(app);
}
