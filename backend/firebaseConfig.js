const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Replace with your Firebase service account JSON

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<YOUR_PROJECT_ID>.firebaseio.com"
});

const db = admin.firestore();
module.exports = { db };
