const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const { connectToDatabase } = require('../utils/database.cjs');
const { configureWebSocket } = require('./webSocketConfig.cjs');
const { checkApiKey } = require('../middleware/ApikeyChecker.cjs');
const { configureRoutes } = require('./routesConfig.cjs');

try {
  const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Database connection
const db = connectToDatabase('mongodb://localhost:27017');

app.use(cors());
app.use(express.json());
app.use(checkApiKey);

// Configure WebSocket
configureWebSocket(wss, checkApiKey);

// Configure routes
configureRoutes(app);

const port = 3002;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

} catch (error) {
  console.log({ServerError:error})
}
