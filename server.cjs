const express = require('express');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const { checkApiKey } = require('./resources/js/middleware/ApikeyChecker.cjs');
const { configureRoutes } = require('./resources/js/config/routesConfig.cjs');
const { configureWebSocket } = require('./resources/js/config/webSocketConfig.cjs');
const { connectToDatabase, connectToSqlDatabase } = require('./resources/js/utils/database.cjs');
const {getDomain,setDomain}=require('./DomainProvider.cjs')
const app = express();
const port = getDomain().port;

app.use(cors());
app.use(express.json());
app.use(checkApiKey);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

async function yieldingConnection() {
  const db = await connectToDatabase(true); 
  const SQLDB = await connectToSqlDatabase();
  
  // WEBSOCKET-SERVER (REALTIME COMMUNICATION)
  configureWebSocket(wss, db, SQLDB);
  
  // API ENDPOINTS
  configureRoutes(app, db);
}

yieldingConnection();

// Start the server (HTTP and WebSocket)
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
