const { handleVehicleMessages, Vehicle } = require('./VehiclesHandler.cjs');
const { handleDeviceMessages, Device } = require('./DevicesHandler.cjs');
const { handleConnectionMessages, Connection } = require('./ConnectionHandler.cjs');
const { handleLogin, Auth } = require('./LoginHandler.cjs');
const { ObjectId } = require('mongodb');

// Retrieve data by ID for the Connection model
async function getConnectionById(id, db) {
  _id=new ObjectId(id);
  const connection = await db.collection('connections').findOne({ _id: _id });
  return connection;
}

// Retrieve data by ID for the Vehicle model
async function getVehicleById(id, db) {
  _id=new ObjectId(id);
  const vehicle = await db.collection('userhvs').findOne({ _id: _id });
  return vehicle;
}

// Retrieve data by ID for the Device model
async function getDeviceById(id, db) {
  _id=new ObjectId(id);
  const device = await db.collection('userdvs').findOne({ _id: _id });
  return device;
}

// Retrieve data by ID for the Auth model
async function getUserById(id, db) {
  _id=new ObjectId(id);

  const user = await db.collection('users').findOne({ _id: _id });
  return user;
}


// Retrieve all connections
async function getAllConnections(db) {
    const connections = await db.collection('connections').find().toArray();
    return connections;
  }
  
  // Retrieve all vehicles
  async function getAllVehicles(db) {
    const vehicles = await db.collection('userhvs').find().toArray();
    return vehicles;
  }
  
  // Retrieve all devices
  async function getAllDevices(db) {
    const devices = await db.collection('userdvs').find().toArray();
    return devices;
  }
  
  // Retrieve all users
  async function getAllUsers(db) {
    const users = await db.collection('users').find().toArray();
    return users;
  }

module.exports = {
  getConnectionById,
  getVehicleById,
  getDeviceById,
  getUserById,
  getAllConnections,
  getAllVehicles,
  getAllDevices,
  getAllUsers,
};
