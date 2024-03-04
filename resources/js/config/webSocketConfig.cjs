const crypto = require('crypto');
const winston = require('winston');
const WebSocket = require('ws');
const { messageHandlers, registerHandler,
  handleClientKeyRequest,
  handleInitUniyDevicesLocation,
  handlePoke,
  handleDeviceMoved,
  handleTypeHere,
  handleRunning,
  handleMovingPart,
  handleUnityLogin, } = require('./messageTypesRegister.cjs');
const clients = new Set();
const clientsName = new Map();
const activeConnections = {};
let connectionIndex = 0;
let fps = 0;
// Setup Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
const TMD = {
  type: '',
  message: '',
  data: {},
}
function broadcast(TMD) {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(TMD));
    }
  });
}
function generateClientId() {
  return Date.now().toString();
}
//API-KEY
const generateRandomHexString = (length) => {
  const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
  const hexString = randomBytes.toString('hex').slice(0, length);
  return hexString;
};
function configureWebSocket(wss, db) {
  wss.on('connection', (ws, req) => {
    clients.add(ws);
    connectionIndex++;
    const userAgent = req.headers['user-agent'] || '';
    const unityClientLogin = req.headers['cookie'] || '';
    const clientIP = req.connection.remoteAddress || '';
    const isBrowser = userAgent.toLowerCase().includes('mozilla') && userAgent.toLowerCase().includes('applewebkit');
    const isMobile = userAgent.toLowerCase().includes('mobile');
    const clientInfo = {
      ws,
      clientId: generateClientId(),
      connectionIndex,
      platform: isBrowser ? 'WEBAPP' : 'UNITY_CLIENT',
      userAgent,
      isMobile,
      clientIP,
      origin: req.headers.origin || '',
      protocol: req.headers['sec-websocket-protocol'] || '',
    };
    clientsName.set(ws, clientInfo.clientId)
    activeConnections[clientInfo.clientId] = clientInfo;
    const currentClient = clientsName.get(ws);
    const clientKey = { key: generateRandomHexString(16), client: ws, ID: currentClient };
    ws.send(JSON.stringify({ type: 'Identity', message: 'serverAssignAutoID', data: currentClient }))
    ws.on('message',async (msg) => {
      let parsedMessage = msg;
      parsedMessage = JSON.parse(msg);
      try {
        const { type = '', message = '', data = '' } = parsedMessage;
        TMD.type = type; TMD.message = message; TMD.data = data;
        if (typeof messageHandlers[type] === 'function') {
          await messageHandlers[type](parsedMessage, clientKey, ws, db);
        } else {
          console.log(`No handler registered for message type: ${type}`);
        }
      } catch (error) {
        console.log(error)
      }
      console.log('User message');
    });
    ws.on('open', () => {
      console.log('User data');
    })
    logger.info('User connected');
    ws.on('close', () => {
      logger.info('User disconnected');
      const currentClient = clientsName.get(ws);
      console.log(currentClient + " left..");
      delete activeConnections[clientInfo.clientId];
      connectionIndex--;
      broadcast(JSON.stringify({ type: 'out', message: 'disconnected', data: ws }))
      clients.delete(ws);
    });
  });
  registerHandler('clientKeyRequest', handleClientKeyRequest);
  registerHandler('initUniyDevicesLoaction', handleInitUniyDevicesLocation);
  registerHandler('poke', handlePoke);
  registerHandler('deviceMoved', handleDeviceMoved);
  registerHandler('type_here', handleTypeHere);
  registerHandler('running', handleRunning);
  registerHandler('movingPart', handleMovingPart);
  registerHandler('unitylogin', handleUnityLogin);
}
module.exports = { configureWebSocket };