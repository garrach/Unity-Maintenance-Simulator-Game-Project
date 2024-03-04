const { ObjectId } = require('mongodb');

// Update or set data for the Connection model by ID
async function setConnectionById(id, newData, db) {
  const _id = new ObjectId(id);
  const result = await db.collection('connections').updateOne({ _id }, { $set: newData });
  return result.modifiedCount > 0 ? true : false;
}

// Update or set data for the Vehicle model by ID
async function setVehicleById(id, newData, db) {
  const _id = new ObjectId(id);
  const result = await db.collection('userhvs').updateOne({ _id }, { $set: newData });
  return result.modifiedCount > 0 ? true : false;
}

// Update or set data for the Device model by ID
async function setDeviceById(id, newData, db) {
  const _id = new ObjectId(id);
  const result = await db.collection('userdvs').updateOne({ _id }, { $set: newData });
  return result.modifiedCount > 0 ? true : false;
}

// Update or set data for the Auth model by ID
async function setUserById(id, newData, db) {
  const _id = new ObjectId(id);
  const result = await db.collection('users').updateOne({ _id }, { $set: newData });
  return result.modifiedCount > 0 ? true : false;
}

module.exports = {
  setConnectionById,
  setVehicleById,
  setDeviceById,
  setUserById,
};
