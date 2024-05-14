// configureWebSocket.js
const crypto = require('crypto');
const { WebSocketSender } = require('../handlers/WebSocketOperations.cjs');
const {messageHandlers,unityInstance, registerHandler, handleClientKeyRequest, handlewebClientIdentity, handleInitUniyDevicesLocation
   ,handleUnityLogin,handleUserRoom,handleUserInstance,handleUserInstanceVehicle,handleDeviceMovement,
   handleUserInstanceDevice} = require('./messageTypesRegister.cjs');

const clients = new Set();
const clientsInfo = new Map();
const webSocketSender = new WebSocketSender();
const TMD={
  type:'',
  message:'',
  data:{},
}
function generateClientId() {
  return Date.now().toString();
}
const generateRandomHexString = (length) => {
  const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
  const hexString = randomBytes.toString('hex').slice(0, length);
  return hexString;
};
const clientKey = {ID:0,key:''};
function configureWebSocket(wss, db,SQLDB) {
  try {
    wss.on('connection', (ws, req) => {
      clients.add(ws);
  
      const userAgent = req.headers['user-agent'] || '';
      const clientIP = req.connection.remoteAddress || '';
      const isBrowser = userAgent.toLowerCase().includes('mozilla') && userAgent.toLowerCase().includes('applewebkit');
      
      const clientInfo = {
        ws,
        clientId: generateClientId(),
        platform: isBrowser ? 'WEBAPP' : 'UNITY_CLIENT',
        userAgent,
        isMobile: userAgent.toLowerCase().includes('mobile'),
        clientIP,
        origin: req.headers.origin || '',
        protocol: req.headers['sec-websocket-protocol'] || '',
      };
      webSocketSender.sendToClient(clientInfo.clientId,{type:"checkUser",message:"Welcome",data:clientInfo.clientId})
  
      clientKey.ID=clientInfo.clientId;
      clientKey.key=generateRandomHexString(16);
  
      clientsInfo.set(clientInfo.clientId, clientInfo);
  
      console.log(`Client connected: ${clientInfo.clientId}`);
      webSocketSender.addClient(clientInfo.clientId, ws);
  
      webSocketSender.sendToClient(clientInfo.clientId, {
        type: 'welcome',
        message: 'Welcome to the WebSocket server!',
        data: clientKey.ID,
      });
  
      ws.on('message', async (msg) => {
        let parsedMessage = msg;
        // Parse the received message
        try {
          parsedMessage = JSON.parse(msg);
          console.log(`Received message from ${clientInfo.clientId}: ${parsedMessage.message}`);
        } catch (error) {
          console.error('Error parsing JSON:', error);
          return;
        }
  
        const { type = '', message = '', data = '' } = parsedMessage;
        TMD.type = type;
        TMD.message = message;
        TMD.data = data;
  
        // Dispatch message handling based on type
        if (typeof messageHandlers[type] === 'function') {
          await messageHandlers[type](TMD, clientKey, ws, db, clients,clientInfo,SQLDB);
        } else {
          console.log(`No handler registered for message type: ${type}`);
        }
      });
  
      ws.on('close', () => {
        console.log(`Client disconnected: ${clientInfo.clientId}`);
        webSocketSender.removeClient(clientInfo.clientId);
        clientsInfo.delete(clientInfo.clientId);
        clients.delete(ws);

        for (let [key, value] of unityInstance.entries()) {
          if (value === ws) {
              unityInstance.delete(key);
              webSocketSender.broadcast({type:'unityInstanceOff',message:'unity Instance Off',data:null})
              break; 
          }
      }

      }); 
    }); 
  
    registerHandler('webClientIdentity', handlewebClientIdentity);
    registerHandler('clientKeyRequest', handleClientKeyRequest);
    registerHandler('initUniyDevicesLocation', handleInitUniyDevicesLocation);
    registerHandler('login', handleUnityLogin);
    registerHandler('roomState', handleUserRoom);
    registerHandler('unityStat', handleUserInstance);
    registerHandler('unityStatVH', handleUserInstanceVehicle);
    registerHandler('unityStatDV', handleUserInstanceDevice);
    registerHandler('movingPart', handleDeviceMovement);
  
    console.log('WebSocket server configured');
  } catch (error) {
    console.log(error);
  }
  
}

module.exports = { configureWebSocket, clientsInfo };
