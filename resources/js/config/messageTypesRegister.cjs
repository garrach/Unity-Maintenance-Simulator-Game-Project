//messageTypesRegister.cjs
const { getConnectionById,
    getVehicleById,
    getDeviceById,
    getUserById,
    getAllConnections,
    getAllVehicles,
    getAllDevices,
    getAllUsers, } = require('../handlers/RetriveHandler.cjs');
  
// Define message handlers
const messageHandlers = {};

// Register handlers
function registerHandler(type, handlerFunction) {
    messageHandlers[type] = handlerFunction;
}

// ClientKeyRequest handler
function handleClientKeyRequest(TMD, clientKey, ws) {
    console.log(TMD)
    console.log(clientKey.ID)
    ws.send(JSON.stringify({TMD:TMD,client:clientKey.ID,Key:clientKey.key}))
}

function handleInitUniyDevicesLocation(TMD) {
    console.log(TMD.message); 
}
// Placeholder handler functions
function handleInitUniyDevicesLocation(TMD, clientKey, ws, db) {
    console.log(TMD.message); 
}

function handlePoke(TMD, clientKey, ws, db) {
    console.log(TMD.message); 
}

function handleDeviceMoved(TMD, clientKey, ws, db) {
    console.log(TMD.message); 
}

function handleTypeHere(TMD, clientKey, ws, db) {
    console.log(TMD.message); 
}

function handleRunning(TMD, clientKey, ws, db) {
    console.log(TMD.message); 
}

function handleMovingPart(TMD, clientKey, ws, db) {
    console.log(TMD.message); 
}

async function handleUnityLogin(TMD, clientKey, ws, db) {
    console.log(TMD.message); 
    await findUser(TMD.data,ws,db)
}
async function findUser(dataInfoMSG, ws, db) {
    const arr = await getUserById(dataInfoMSG.user.id, db);
    ws.send(JSON.stringify({ user: arr }))
  }

module.exports = {
    messageHandlers, registerHandler,
    handleClientKeyRequest,
    handleInitUniyDevicesLocation,
    handleInitUniyDevicesLocation,
    handlePoke,
    handleDeviceMoved,
    handleTypeHere,
    handleRunning,
    handleMovingPart,
    handleUnityLogin,
};