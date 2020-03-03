const express = require('express');
const app = express.Router();

// Firebase libraries
const firebase = require("firebase/app");
require("firebase/firestore");
const { firebaseConfig } = require("./firebase/firebaseConfig");

// Configure firebase
firebaseConfig();

// Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

// Main route
app.get("/", (req,res) => {
    // Create Firestore database instance
    var db = firebase.firestore();

    // Select topics collection
    const topics = db.collection("topics");

    // Query database
    let query = topics.get().then((snapShot) => {
        var data = [];

        if (snapShot.empty) {
            console.log("No documents");
            return;
        }
    
        snapShot.forEach((doc) => {
            if (doc.get("status") == "1") {
                data.push(doc.data());
            }
        });
        res.send(data);
    }).catch((err) => {
        console.log("Error occurred: ", err);
    });
});

module.exports = app;
