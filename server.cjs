const express = require('express');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const { checkApiKey } = require('./resources/js/middleware/ApikeyChecker.cjs');
const { configureRoutes } = require('./resources/js/config/routesConfig.cjs');
const { configureWebSocket } = require('./resources/js/config/webSocketConfig.cjs');
const { connectToDatabase } = require('./resources/js/utils/database.cjs');
const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());
app.use(checkApiKey);
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

async function yieldingConnetion(){
const db= await connectToDatabase(true); 
//WEBSOKET-SERVER (REALTIME COMMUNICATION)
configureWebSocket(wss,db);
//API ENDPOINTS
configureRoutes(app,db);
}
yieldingConnetion();

//Start-Servers
app.listen(port, () => {
  console.log(`Server is listening on ^^ort ${port}`);
  server.listen(port + 2, () => {
    console.log(`Server WebSocket is listening on port ${port + 2}`);
  });
});
//END SERVER