// WebSocketOperations.js

const WebSocket = require('ws');

class WebSocketSender {
    constructor() {
      this.connectedClients = new Map();
    }
  
    addClient(clientId, ws) {
      this.connectedClients.set(clientId, ws);
    }
  
    removeClient(clientId) {
      this.connectedClients.delete(clientId);
    }
  
    sendToClient(clientId, message) {
      const ws = this.connectedClients.get(clientId);
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(message));
      }
    }
  
    broadcast(message) {
      this.connectedClients.forEach((ws) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(message));
        }
      });
    }
  }
  
  function handleClientConnected(webSocketSender, clientId, ws) {
    webSocketSender.addClient(clientId, ws);
  }
  
  function handleClientDisconnected(webSocketSender, clientId) {
    webSocketSender.removeClient(clientId);
    console.log('it Disconnect');

  }
  
  function sendToClient(webSocketSender, clientId, message) {
    webSocketSender.sendToClient(clientId, message);
  }
  
  function broadcast(webSocketSender, message) {
    webSocketSender.broadcast(message);
  }
  
  module.exports = {
    WebSocketSender,
    handleClientConnected,
    handleClientDisconnected,
    sendToClient,
    broadcast,
  };
  