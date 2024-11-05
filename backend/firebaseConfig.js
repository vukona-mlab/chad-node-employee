const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey'); // Replace with your Firebase service account JSON
console.log({ serviceAccount });
console.log({ env: process.env.ACCOUNT_TYPE });

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<YOUR_PROJECT_ID>.firebaseio.com"
});

const db = admin.firestore();
module.exports = { db };
