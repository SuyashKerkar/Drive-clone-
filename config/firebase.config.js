const Firebase = require("firebase-admin");

const serviceAccount = require("../drive-cc5a7-firebase-adminsdk-fbsvc-30a78d8f09.json");

const firebase = Firebase.initializeApp({
  credential: Firebase.credential.cert(serviceAccount),
  storageBucket: "drive-cc5a7.firebasestorage.app",
});

module.exports = Firebase;
