const admin = require("firebase-admin");
const { getFirestore, Timestamp, FieldValue, Filter} = require("firebase-admin/firestore");

const config = require("./ssalary-sekretKey.json")

admin.initializeApp({
    credential: admin.credential.cert(config)
})

const DB = getFirestore();

module.exports = DB;