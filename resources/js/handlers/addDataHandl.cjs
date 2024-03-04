const { ObjectId } = require('mongodb');

// Add a new connection
async function addConnection(data, db) {
  const result = await db.collection('connections').insertOne(data);
  return result.insertedId;
}

// Add a new vehicle
async function addVehicle(data, db) {
  const result = await db.collection('userhvs').insertOne(data);
  return result.insertedId;
}

// Add a new device
async function addDevice(data, db) {
  const result = await db.collection('userdvs').insertOne(data);
  return result.insertedId;
}

// Add a new user
async function addUser(data, db) {
  const result = await db.collection('users').insertOne(data);
  return result.insertedId;
}

module.exports = {
  addConnection,
  addVehicle,
  addDevice,
  addUser,
};
