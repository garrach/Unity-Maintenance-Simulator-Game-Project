const mongoose = require('mongoose');
const ConnectionSchema = new mongoose.Schema({
  UDB_id:Number,
  DDB_id:Number,
});
const Connection = mongoose.model('connections', ConnectionSchema);
async function handleConnectionMessages(res, data, db) {
  // Check if a connection with the same V_id already exists
  const existingConnection = await db.collection('connections').findOne({ V_id: data.vehicle_id });
  if (existingConnection) {
    // Handle the case where the connection already exists
    console.log({ error: 'Connection with the same vehicle_id already exists' });
  } else {
    // If the connection does not exist, proceed to create and save the new connection
    const newConnection = new Connection({ DDB_id: data.device_id, UDB_id: data.user_id });
    await newConnection.save();
    console.log({ success: 'Connection added successfully' });
  }
}
  module.exports = {
    handleConnectionMessages,
    Connection,
  };
