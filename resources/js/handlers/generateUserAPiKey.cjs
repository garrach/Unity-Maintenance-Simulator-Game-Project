const mongoose = require('mongoose');
const apikeySchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
    },
    userKey: String,
});
const Apikey = mongoose.model('apikeys', apikeySchema);
async function handleApikey(data, db) {
        const newConnection = new Apikey(data);
        await newConnection.save();
        console.log({ success: 'apikey added successfully' });
}
module.exports = {
    handleApikey,
    Apikey,
};
