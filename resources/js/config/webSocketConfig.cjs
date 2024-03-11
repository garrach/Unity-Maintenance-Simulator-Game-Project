// configureWebSocket.js

const { WebSocketSender } = require('../handlers/WebSocketOperations.cjs');
const { registerHandler, handleClientKeyRequest, handleInitUniyDevicesLocation } = require('./messageTypesRegister.cjs');

const clients = new Set();
const clientsInfo = new Map();
const webSocketSender = new WebSocketSender();

function generateClientId() {
  return Date.now().toString();
}

function configureWebSocket(wss, db) {
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

    clientsInfo.set(clientInfo.clientId, clientInfo);

    console.log(`Client connected: ${clientInfo.clientId}`);
    webSocketSender.addClient(clientInfo.clientId, ws);

    webSocketSender.sendToClient(clientInfo.clientId, {
      type: 'welcome',
      message: 'Welcome to the WebSocket server!',
    });

    ws.on('message', async (msg) => {
      console.log(`Received message from ${clientInfo.clientId}: ${msg}`);
    });

    ws.on('close', () => {
      console.log(`Client disconnected: ${clientInfo.clientId}`);
      webSocketSender.removeClient(clientInfo.clientId);
      clientsInfo.delete(clientInfo.clientId);
      clients.delete(ws);
    });
  });

  registerHandler('clientKeyRequest', handleClientKeyRequest);
  registerHandler('initUniyDevicesLocation', handleInitUniyDevicesLocation);
  // Add other message handlers as needed

  console.log('WebSocket server configured');
}

module.exports = { configureWebSocket, clientsInfo };
