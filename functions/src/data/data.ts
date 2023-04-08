import admin = require("firebase-admin");
admin.initializeApp();
const db = admin.database();

function getRefUsers() {
    return db.ref("users");
}

export { getRefUsers };
