const express = require('express');
const app = express();
const routing = require('./routing');
//const { defineDatabaseCollection } = require("./firebase/firebaseConnection");

// Initialize Firebase > FireStore Database
//defineDatabaseCollection();

app.use("/", routing);

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log("Listening on port " + port);
});