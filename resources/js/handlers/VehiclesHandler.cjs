const mongoose = require('mongoose');

async function getVehicleById(id,db){
    const V_data = db.collection('vehicles').findOne({_id:`ObjectId(${id})`});
    return {car:V_data} ;
}

const VehicleSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: String,
  mpg:Number,
  cylinders:Number,
  displacement:Number,
  horsepower:Number,
  weight:Number,
  acceleration:Number,
  origin: String
});

const Vehicle = mongoose.model('userHV', VehicleSchema);


async function handleVehicleMessages(message, ws, db) {
    // Placeholder code for handling vehicle messages
  
    // Example: Create a vehicle
    if (message.type === 0) {
      
      console.log(message)

    }
  
    // Example: Read vehicles
    if (message.type === 1) {
      // Implement readVehicles function
      // readVehicles(ws, db);
      console.log('Handling readVehicles request');

    }
  
    // ... add more cases based on your application's requirements
  }
  
  module.exports = {
    handleVehicleMessages,
    getVehicleById,
    Vehicle,
  };
  