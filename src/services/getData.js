const { Firestore } = require('@google-cloud/firestore');
 
// https://chartbrew.com/blog/how-to-fetch-and-filter-firestore-collection-data-with-firebase-nodejs-sdk/

async function getData() {
    console.log("masuk sini kok");
    const db = new Firestore();

    const audioCol = db.collection('speech-audio');
    const snapshot = await audioCol.get();
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });

    return 'tets';
}
 
module.exports = getData;