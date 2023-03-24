const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.database();

function getRefUsers() {
    return db.ref("users");
}

function getRefStatsConnections() {
    return db.ref("stats/connections");
}

export { getRefUsers, getRefStatsConnections };
