const mongoose = require('mongoose');

// Define a nested schema for position
const positionSchema = new mongoose.Schema({
    x: Number,
    y: Number,
    z: Number
});

const DataSchema = new mongoose.Schema({
    vehicleSp: {
        name: String,
        position: positionSchema // Nested position schema
    },
    devicesSp: [{
        name: String,
        position: positionSchema // Nested position schema
    }]
});

// Define the main schema
const dataPlacementSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        unique: true // Make user_id unique
    }
    ,
    data: Object, DataSchema,

});

const DataPlacement = mongoose.model('DataPlacement', dataPlacementSchema);

// Define function to provide placement 
async function ProvidePlacement(data,id, db) {
    const existingUser = await db.collection('dataplacements').findOne({ user_id: id });
    if (existingUser) {
        console.log({error:"DataPlacement with the same user_id already exists"})
    } else {
        try {
            const result = await DataPlacement.create(data);
            console.log('Placement provided:', result);
            return result;
        } catch (error) {
            console.error('Error providing placement:', error);
            throw error;
        }
    }

}

module.exports = { ProvidePlacement, DataPlacement };


