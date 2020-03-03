require("firebase/firestore");
const { firebaseConfig } = require("./firebaseConfig");

// Connect to libraryData.js file
const { library } = require("../libraryData");
const url = "https://lgapi-us.libapps.com/1.1/guides?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6";

exports.defineDatabaseCollection = () => {
    firebaseConfig();

    // Create Firestore database instance
    var db = firebase.firestore();

    // Fetch library data
    let dataObj = library(url);

    // Map library data into Firebase collection
    dataObj.then((objects) => {
        objects.forEach((obj) => {
            db.collection("topics").add({
                id: obj.id,
                type_id: obj.type_id,
                site_id: obj.site_id,
                owner_id: obj.owner_id,
                group_id: obj.owner_id,
                name: obj.name,
                description: obj.description,
                redirect_url: obj.redirect_url,
                status: obj.status,
                published: obj.published,
                created: obj.created,
                updated: obj.updated,
                slug_id: obj.slug_id,
                friendly_url: obj.friendly_url,
                nav_type: obj.nav_type,
                count_hit: obj.count_hit,
                url: obj.url,
                status_label: obj.status_label,
                type_label: obj.type_label
            }).then((docRef) => {
                console.log("Document written with ID: " + docRef.id);
            }).catch((err) => {
                console.log("Error adding document", err)
            });
        });
    }).catch((err) => {
        console.log("Promise failed", err);
    });
}