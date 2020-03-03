const fetch = require("node-fetch");

exports.library = async(url) => {
    let counter = 0;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Connection failed");
    }

    const json = await response.json();
    return json;
}