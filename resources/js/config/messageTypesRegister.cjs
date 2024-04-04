//messageTypesRegister.cjs
const { getConnectionById,
    getVehicleById,
    getDeviceById,
    getUserById,
    getDeviceByDBId,
    getUserByName,
    getAllConnections,
    getAllVehicles,
    getAllDevices,
    getAllUsers, } = require('../handlers/RetriveHandler.cjs');
const WebSocket = require('ws');
const { WebSocketSender } = require('../handlers/WebSocketOperations.cjs');
const { retriveUserDevices } = require('./routesConfig.cjs');

const webSocketSender = new WebSocketSender();
const unityInstance=new Map();

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

async function handleUserRoom(TMD, clientKey, ws, db, clients,clientInfo) {
    console.log(clientInfo.clientId)
    retriveUserDevices(false,TMD.data,ws,null,db);
}
async function handleUserInstance(TMD, clientKey, ws, db, clients,clientInfo) {
    const currentUser=await getUserByName(TMD.data.user.name,db);
    if(unityInstance.get('unity')){
        ws.send(JSON.stringify({type:"login",message:"unity instanceRunning",data:{client:currentUser,socket:unityInstance.get('unity')}}))
    }
}




async function handleUserInstanceVehicle(TMD, clientKey, ws, db, clients,clientInfo) {

    const currentUser=await getUserByName(TMD.data.user.name,db);
    if(unityInstance.get('unity')){
        ws.send(JSON.stringify())
        broadcast({type:"vehicleStat",message:"unity instanceRunning (Vehicle)",data:{vehicle:TMD.data}},clientKey, ws, db, clients)
    }

}

async function handleUserInstanceDevice(TMD, clientKey, ws, db, clients,clientInfo) {

    //const currentUser=await getUserByName(TMD.data.user.name,db);
    if(unityInstance.get('unity')){
        broadcast({type:"deviceStat",message:"unity instanceRunning (Device)",data:{device:TMD.data}},clientKey, ws, db, clients)
    }
}

// ClientKeyRequest handler
function handleClientKeyRequest(TMD, clientKey, ws) {
    console.log(TMD)
    console.log(clientKey.ID)
    ws.send(JSON.stringify({TMD:TMD,client:clientKey.ID,Key:clientKey.key}))
}

function handleInitUniyDevicesLocation(TMD, clientKey, ws, db, clients,clientInfo) {
    console.log(TMD.message); 
    if(unityInstance.get('unity')){
        broadcast({type:"devicesPlacement",message:"sent devices placemnet instanceRunning (Device)",data:TMD.data},clientKey, ws, db, clients)
    }
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
async function handleUnityLogin(TMD, clientKey, ws, db, clients,clientInfo) {
    
    const user=await findUser(TMD.data,ws,db)
    console.log(user);
    if(user){
        unityInstance.set('unity',ws);
        broadcast({type:"auth",message:"valid user",data:{user:user}},clientKey, ws, db, clients)
       // ws.send(JSON.stringify());
    }else{
        ws.send(JSON.stringify({type:"unregistred",message:"valid user",data:'unregistred'}))
    }
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
    unityInstance,
    messageHandlers, registerHandler,
    handlewebClientIdentity,
    handleUserInstanceVehicle,
    handleUserInstanceDevice,
    handleClientKeyRequest,
    handleInitUniyDevicesLocation,
    handlePoke,
    handleDeviceMoved,
    handleTypeHere,
    handleRunning,
    handleMovingPart,
    handleUnityLogin,
    handleUserRoom,
    handleUserInstance,
    broadcast,
};