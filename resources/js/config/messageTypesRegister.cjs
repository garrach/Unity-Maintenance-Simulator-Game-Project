//messageTypesRegister.cjs
const { getConnectionById,
    getVehicleById,
    getDeviceById,
    getUserById,
    getUserByName,
    getAllConnections,
    getAllVehicles,
    getAllDevices,
    getAllUsers, } = require('../handlers/RetriveHandler.cjs');
const WebSocket = require('ws');
const { WebSocketSender } = require('../handlers/WebSocketOperations.cjs');
const webSocketSender = new WebSocketSender();

// Define message handlers
const messageHandlers = {};

// Register handlers
function registerHandler(type, handlerFunction) {
    messageHandlers[type] = handlerFunction;
}

//webClientIdentity handler
function handlewebClientIdentity(TMD, clientKey, ws) {

    const {type,message}=TMD;

    ws.send(JSON.stringify({type,message,data:clientKey}))
}


let Createdrooms=0;

async function handleUserRoom(TMD, clientKey, ws,clientInfo) {
    Createdrooms+=1;
    console.log('ok user in the room now')
    console.log(TMD)
    console.log('------------------------------')
    const message={type:'room establish',message:'User Interface setup, Garage Mode',data:Createdrooms}
    webSocketSender.sendToClient(clientInfo.clientId,message)
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
    const user=await findUser(TMD.data,ws,db)
    console.log(user);
    ws.send(JSON.stringify({type:"auth",message:"valid user",data:{user:user}}));
}
async function findUser(dataInfoMSG, ws, db) {
     const arr = await getUserByName(dataInfoMSG.username, db);
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
    handlewebClientIdentity,
    handleClientKeyRequest,
    handleInitUniyDevicesLocation,
    handleInitUniyDevicesLocation,
    handlePoke,
    handleDeviceMoved,
    handleTypeHere,
    handleRunning,
    handleMovingPart,
    handleUnityLogin,
    handleUserRoom,
    broadcast,
};