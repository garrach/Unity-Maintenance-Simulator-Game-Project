const mongoose = require("mongoose");
const { ObjectId } = require('mongodb');
async function yieldingConnection() {
    const id = new ObjectId('664739465ce0062a4cda8f4f')
    try {
        const db = await mongoose.connect(`mongodb://localhost:27017/backupplan?directConnection=true`);
        console.log(await db.connection.collection('users').findOne({_id:id}));
    } catch (error) {
        console.log("mongo Failed");
    }
}

yieldingConnection();
