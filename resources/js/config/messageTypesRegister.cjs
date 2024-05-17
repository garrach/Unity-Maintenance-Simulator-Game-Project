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
    getAllUsers, Add_placement } = require('../handlers/RetriveHandler.cjs');

const WebSocket = require('ws');
const { WebSocketSender } = require('../handlers/WebSocketOperations.cjs');
const { retriveUserDevices } = require('./routesConfig.cjs');
const { ObjectId } = require('mongodb');

const webSocketSender = new WebSocketSender();
const unityInstance = new Map();

// Define message handlers
const messageHandlers = {};

// Register handlers
function registerHandler(type, handlerFunction) {
    messageHandlers[type] = handlerFunction;
}

//webClientIdentity handler
function handlewebClientIdentity(TMD, clientKey, ws) {

    const { type, message } = TMD;

    ws.send(JSON.stringify({ type, message, data: clientKey }))
}

async function handleDeviceMovement(movementData, clientKey, ws, db, clients, clientInfo) {
    try {
        const user_id = movementData.data.user_id.name;
        const user = await getUserByName(user_id, db);


        const position = movementData.data.position;
        const dataToUpdate = {
            user_id: user,
            data: [position]
        };

        const placement = await db.collection('dataplacements').findOne({ user_id: user._id });
        const userCurrentInfo = {
            userDataMongo: user._id,
            moving: placement,
            ofPart: movementData.message.replace('Device:', ''),
            toPlace: { x: 0, y: 0 },
        };

        userCurrentInfo.moving.data.devicesSp.map((device) => {
            if (device.name === userCurrentInfo.ofPart) {
                const movementFactor = 0.1;
                userCurrentInfo.toPlace = {
                    x: isNaN(device.position.x) ? 0 : (device.position.x - position.x * movementFactor),
                    y: isNaN(device.position.y) ? 0 : device.position.y,
                    z: isNaN(device.position.z) ? 0 : (device.position.z + position.y * movementFactor)
                };

                // Update nested object in the database
                db.collection('dataplacements').updateOne(
                    { user_id: user._id },
                    { $set: { "data.devicesSp.$[elem].position": userCurrentInfo.toPlace } },
                    { arrayFilters: [{ "elem.name": userCurrentInfo.ofPart }] }
                );
            }
        });

    } catch (error) {
        console.error("Error handling device movement:", error);
    }
}


let Createdrooms = 0;

async function handleUserRoom(TMD, clientKey, ws, db, clients, clientInfo) {
    retriveUserDevices(false, TMD.data, ws, null, db);
}
async function handleUserInstance(TMD, clientKey, ws, db, clients, clientInfo) {
    const currentUser = await getUserByName(TMD.data.user.name, db);
    if (unityInstance.get('unity')) {
        ws.send(JSON.stringify({ type: "login", message: "unity instanceRunning", data: { client: currentUser, socket: unityInstance.get('unity') } }))
    }
}


let experiencePt = 0;
let currentUserID=0;
async function tryParsJSON(data,db) {
    try {
        const updatingInfo = data.data.replace("'", "");

        const parsedData = JSON.parse(updatingInfo)
        experiencePt = parsedData.exp; 
        const user = await getUserById(parsedData.clientID,db)

        currentUserID=user.BD_id
    } catch (error) {

        console.log(error);
    }
}

async function handleUserInstanceVehicle(TMD, clientKey, ws, db, clients, clientInfo, SQLDB) {
    // Example: Check if SQLDB is not null before using it
    if (SQLDB) {
        console.log('SQLDB is operatinal For Vehicle stat..')
        if (unityInstance.get('unity')) {
            tryParsJSON(TMD,db)
            const query = "UPDATE `carmaintain`.`userexpcoin` SET `experience`='" + (parseFloat(experiencePt)) + "' WHERE  `user_id`="+(currentUserID);

            try {
                SQLDB.query(query)
            } catch (error) {
                console.log("exp not updated")
                return;
            }
            ws.send(JSON.stringify({ message: "Unity instance is running (Vehicle)" }));
        }
        // Example: Broadcast a message to all clients
        broadcast({ type: "vehicleStat", message: "Unity instance is running (Vehicle)", data: TMD.data }, clientKey, ws, db, clients);
    } else {
        console.error("SQLDB is null.");
        // Handle the case where SQLDB is null
    }
}

async function handleUserInstanceDevice(TMD, clientKey, ws, db, clients, clientInfo, SQLDB) {
    // Example: Check if SQLDB is not null before using it
    if (SQLDB) {
        console.log('SQLDB is operatinal For Device stat..')
        if (unityInstance.get('unity')) {
            tryParsJSON(TMD,db)
            const query = "UPDATE `carmaintain`.`userexpcoin` SET `experience`='" + (parseFloat(experiencePt)) + "' WHERE  `user_id`="+(currentUserID);
            try {
                SQLDB.query(query)
            } catch (error) {
                console.log({ errorMsg: "exp not updated", error: error })
                return;
            }

            broadcast({ type: "deviceStat", message: "Unity instance is running (Device)", data: TMD.data }, clientKey, ws, db, clients);
        }
    } else {
        console.error("SQLDB is null.");
        // Handle the case where SQLDB is null
    }
}


// ClientKeyRequest handler
function handleClientKeyRequest(TMD, clientKey, ws) {
    ws.send(JSON.stringify({ TMD: TMD, client: clientKey.ID, Key: clientKey.key }))
}

function handleInitUniyDevicesLocation(TMD, clientKey, ws, db, clients, clientInfo) {
    console.log(TMD.message);
    if (unityInstance.get('unity')) {
        broadcast({ type: "devicesPlacement", message: "sent devices placemnet instanceRunning (Device)", data: TMD.data }, clientKey, ws, db, clients)
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
async function handleUnityLogin(TMD, clientKey, ws, db, clients, clientInfo) {

    const user = await findUser(TMD.data, ws, db)
    if (user) {
        unityInstance.set('unity', ws);
        broadcast({ type: "auth", message: "valid user", data: { user: user } }, clientKey, ws, db, clients)
        // ws.send(JSON.stringify());
    } else {
        ws.send(JSON.stringify({ type: "unregistred", message: "valid user", data: 'unregistred' }))
    }
}
async function findUser(dataInfoMSG, ws, db) {
    const arr = await getUserByName(dataInfoMSG.username, db);
    return arr;
}
async function broadcast(TMD, clientKey, ws, db, clients) {
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
    handleDeviceMovement,
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