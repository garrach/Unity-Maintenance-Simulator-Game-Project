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
    }
    ,
    data: Object, DataSchema,

});

const DataPlacement = mongoose.model('DataPlacement', dataPlacementSchema);

// Define function to provide placement 
async function ProvidePlacement(data) {
    console.log({ProvidePlacement:data})
    const result = await DataPlacement.create(data);


}

module.exports = { ProvidePlacement, DataPlacement };


