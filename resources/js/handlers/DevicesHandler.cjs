const mongoose = require('mongoose');
const DeviceSchema = new mongoose.Schema({
  name: String,
  type: String,
});
const Device = mongoose.model('userDV', DeviceSchema);
async function handleDeviceMessages(res, data, db) {
  // Check if a device with the same serial_number already exists
  const existingDevice = await db.collection('userdvs').findOne({ name: data.serial_number });
  if (existingDevice) {
    // Handle the case where the device already exists
    console.log({ error: 'Device with the same serial_number already exists' });
  } else {
    // If the device does not exist, proceed to create and save the new device
    const newDevice = new Device({ name: data.serial_number, type: data.type });
    await newDevice.save();
    console.log({ success: 'Device added successfully' });
  }
}
module.exports = {
  handleDeviceMessages,
  Device,
};
