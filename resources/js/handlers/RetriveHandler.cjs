const { handleVehicleMessages, Vehicle } = require('./VehiclesHandler.cjs');
const { handleDeviceMessages, Device } = require('./DevicesHandler.cjs');
const { handleConnectionMessages, Connection } = require('./ConnectionHandler.cjs');
const { handleLogin, Auth } = require('./LoginHandler.cjs');
const { handleApikey, Apikey } = require('./generateUserAPiKey.cjs');
const { ProvidePlacement, DataPlacement } = require('./spawnHandler.cjs');
const { ObjectId } = require('mongodb');
const crypto = require('crypto');







async function fetch_placement(id, db) {

  const placementID = new ObjectId(id);
  const placement = await db.collection('dataplacements').findOne({ user_id: placementID });
  return placement;
}


async function Add_placement(prevData, db) {
  try {
    const { user_id, data, IDs } = prevData;
    console.log(prevData);
    const validator = ({ username: user_id, itsData: data, orArray: IDs });
    if (IDs && IDs.length > 0) {
      IDs.map(async (user) => {
        const placementID = new ObjectId(user._id);
        const existingUser = await db.collection('dataplacements').findOne({ user_id: placementID });
        if (existingUser === null) {
          ProvidePlacement({ user_id: placementID, data: validator.itsData });
        } else {
          console.log({ error: 'Data Placements Already exist.' });
        }
      })

    } else {
      const placementID = new ObjectId(user_id);

      ProvidePlacement({ user_id: placementID, data: validator.itsData }, db);
    }
    return true;

  } catch (error) {
    return false;
  }
}
const generateRandomHexString = (length) => {
  const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
  const hexString = randomBytes.toString('hex').slice(0, length);
  return hexString;
};
async function generateUserAPiKey(data, db) {
  const key = generateRandomHexString(32);
  const placementID = new ObjectId(data);

  handleApikey({ user_id: placementID, userKey: key }, db);
  return key;
}

// Retrieve Key by ID for the ApiKeys Collection
async function getAPiKey(BD_id, db) {
  // Check if the passed ID is a valid ObjectId
  const userSQL = await db.collection('users').findOne({ BD_id:Number(BD_id) });
  const userMongoID= userSQL._id;

  if (!ObjectId.isValid(userMongoID)) {
    return;
  }

  const _id = new ObjectId(userMongoID);

  // Check if the user exists
  const user = await db.collection('users').findOne({ _id });
  if (!user) {
    return;
  }

  // Check if the user already has an API key
  const apiKey = await db.collection('apikeys').findOne({ user_id: _id });
  if (apiKey) {
    return apiKey;
  }

  return generateUserAPiKey(userMongoID, db);
}



async function textToSpeech(text, res) {
  const options = {
    method: 'POST',
    headers: {
      'xi-api-key': '959dcd7e1a90a72b9efee0f1c761d80c',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: text,
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.5
      },
      model_id: 'eleven_monolingual_v1'
    })
  };
  try {
    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM?output_format=mp3_22050_32', options);
    if (!response.ok) {
      throw new Error('Failed to fetch MP3 file');
    }

    const mp3Data = await response.arrayBuffer(); // Get MP3 data as ArrayBuffer
    res.setHeader('Content-Type', 'audio/mpeg');
    res.send(Buffer.from(mp3Data)); // Send MP3 data as binary
  } catch (err) {
    console.error(err); // Log any errors
    res.send(JSON.stringify({ type: 'UserApiRegister', message: 'not registered ', data: err }));
  }
}




// Retrieve data by ID for the Connection model
async function getConnectionById(id, db) {
  _id = new ObjectId(id);
  const connection = await db.collection('connections').findOne({ _id: _id });
  return connection;
}

// Retrieve data by ID for the Vehicle model
async function getVehicleById(id, db) {
  _id = new ObjectId(id);
  const vehicle = await db.collection('userhvs').findOne({ _id: _id });
  return vehicle;
}

// Retrieve data by ID for the Device model
async function getDeviceByDBId(id, db) {
  const device = await db.collection('userdvs').findOne({ DB_id: id });
  return device;
}


// Retrieve data by ID for the Device model
async function getDeviceById(id, db) {
  _id = new ObjectId(id);
  const device = await db.collection('userdvs').findOne({ _id: _id });
  return device;
}

// Retrieve data by ID for the Auth model
async function getUserById(id, db) {
  _id = new ObjectId(id);

  const user = await db.collection('users').findOne({ _id: _id });
  return user;
}


// Retrieve data by name for the Auth model
async function getUserByName(name, db) {
  const user = await db.collection('users').findOne({ username: name });
  return user;
}

// Retrieve all connections
async function getAllConnectionsByUser(BD_id, db) {
  const connections = await db.collection('connections').find({ UDB_id: BD_id }).toArray();
  return connections;
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
  getDeviceByDBId,
  getUserById,
  getAllConnections,
  getAllVehicles,
  getAllDevices,
  getAllConnectionsByUser,
  getAllUsers,
  getUserByName,
  textToSpeech,
  fetch_placement,
  Add_placement,
  generateUserAPiKey,
  getAPiKey,
};
