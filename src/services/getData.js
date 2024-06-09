const { Firestore } = require('@google-cloud/firestore');

async function getData() {
    const db = new Firestore();
    const audioDocument = db.collection('speech-audio').doc(id);

    try {
        const doc = await audioDocument.get();
        if (!doc.exists) {
            throw new Error('Document not found');
        }

        const data = doc.data();
        return { id: doc.id, url_audio: data['url-audio'], word: data.word };
    } catch (error) {
        throw new ClientError('Terjadi kesalahan dalam melakukan pengambilan data');
    }
}
 
async function getSpeechById(id) {
    const db = new Firestore();
    const audioDocument = db.collection('speech-audio').doc(id);

    try {
        const doc = await audioDocument.get();
        if (!doc.exists) {
            throw new Error('Document not found');
        }

        const data = doc.data();
        return { id: doc.id, url_audio: data['url-audio'], word: data.word };
    } catch (error) {
        throw new Error('Terjadi kesalahan dalam melakukan pengambilan data');
    }
}
 
module.exports = {
    getData,
    getSpeechById
};