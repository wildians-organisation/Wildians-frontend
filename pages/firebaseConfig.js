import * as config from "../config/config.js";
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

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
const functions = getFunctions(app);
functions.region = config.BUCKET_REGION;

module.exports = { functions };
