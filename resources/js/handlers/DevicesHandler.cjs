const mongoose = require('mongoose');



const DeviceSchema = new mongoose.Schema({
  name: String,
  type: String,
});

const Device = mongoose.model('userDV', DeviceSchema);






async function handleDeviceMessages(message, ws, db) {

  
    // Example: Create a device
    if (message.type === 2) {
      // Implement createDevice function
      // createDevice(message.data, db);
      console.log('Handling createDevice request');
      console.log('Handling device messages:', message);

    }
  
    // Example: Read devices
    if (message.type === 3) {
      // Implement readDevices function
      // readDevices(ws, db);
      console.log('Handling readDevices request');
      // Placeholder code for handling device messages
      console.log('Handling device messages:', message);
    }
  
  }
  
  module.exports = {
    handleDeviceMessages,
    Device,
  };
  