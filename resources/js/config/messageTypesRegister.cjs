//messageTypesRegister.cjs
const { getConnectionById,
    getVehicleById,
    getDeviceById,
    getUserById,
    getAllConnections,
    getAllVehicles,
    getAllDevices,
    getAllUsers, } = require('../handlers/RetriveHandler.cjs');
const WebSocket = require('ws');

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
    ws.send(JSON.stringify(TMD))
}

function handleMovingPart(TMD, clientKey, ws, db) {
    console.log(TMD.message); 
}

async function handleUnityLogin(TMD, clientKey, ws, db) {
    await findUser(TMD.data,ws,db)

    ws.send(JSON.stringify({user:clientKey}));
}
async function findUser(dataInfoMSG, ws, db) {

     const arr = await getUserById(dataInfoMSG.user.id, db);
     return arr;
  }
async function broadcast(TMD,clientKey, ws, db, clients) {
    try {
        
        clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify(TMD));
            } 
          });
          console.log('broadcasting..');
    } catch (error) {
        console.log(error)
    }
    
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
    broadcast,
};