const firebase = require("firebase/app");

exports.firebaseConfig = () => {
    // Your web app's Firebase configuration
    firebase.initializeApp({
        // Insert Firebase Firestore credentials here
    });
}