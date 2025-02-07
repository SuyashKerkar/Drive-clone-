const multer = require("multer");
const firebaseStorage = require("multer-firebase-storage");
const firebase = require("./firebase.config");
const serviceAccount = require("../drive-cc5a7-firebase-adminsdk-fbsvc-30a78d8f09.json");

const storage = firebaseStorage({
  credentials: firebase.credential.cert(serviceAccount),
  bucketName: "drive-cc5a7.firebasestorage.app",
  unique: true,
});

const upload = multer({ storage: storage });

module.exports = upload;
