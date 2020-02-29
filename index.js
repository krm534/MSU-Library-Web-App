const express = require('express');
const app = express();
const fetch = require("node-fetch");

const library = async(uri) => {
    let counter = 0;

    const response = await fetch(uri);
    if (!response.ok) {
        throw new Error("Connection failed");
    }
    const json = await response.json();
    
    json.forEach((jsonInstance) => {
        counter++;
    });

    console.log("Counter: " + counter);
}

library("https://lgapi-us.libapps.com/1.1/guides?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6");

// const port = process.env.port || 3000;
// app.listen(port, () => {
//     console.log("Listening on port " + port);
// });