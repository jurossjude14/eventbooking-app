
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-servicekey/serviceAccountKey.json'); // Replace with actual path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'reservedb-a7b84.firebaseio.com' // Replace with your project ID
});

module.exports = admin;