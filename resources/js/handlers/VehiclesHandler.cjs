const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: String,
  mpg: Number,
  cylinders: Number,
  displacement: Number,
  horsepower: Number,
  weight: Number,
  acceleration: Number,
  origin: String
});
const Vehicle = mongoose.model('userHV', VehicleSchema);
async function handleVehicleMessages(res, data, db) {
  // Check if a vehicle with the same make and model already exists
  const existingVehicle = await db.collection('userhvs').findOne({ make: data.make, model: data.model });
  if (existingVehicle) {
    // Handle the case where the vehicle already exists
    console.log({ error: 'Vehicle with the same make and model already exists' });
  } else {
    // If the vehicle does not exist, proceed to create and save the new vehicle
    const newVehicle = new Vehicle({ make: data.make, model: data.model });
    await newVehicle.save();
    console.log({ success: 'Vehicle added successfully' });
  }
}
module.exports = {
  handleVehicleMessages,
  Vehicle,
};
