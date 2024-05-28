const express = require('express');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const { checkApiKey } = require('./resources/js/middleware/ApikeyChecker.cjs');
const { configureRoutes } = require('./resources/js/config/routesConfig.cjs');
const { configureWebSocket } = require('./resources/js/config/webSocketConfig.cjs');
const { connectToDatabase ,connectToSqlDatabase} = require('./resources/js/utils/database.cjs');
const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());
app.use(checkApiKey);



const server = http.Server(app);
const wss = new WebSocket.Server({ server });

async function yieldingConnetion(){
const db= await connectToDatabase(true);
const SQLBD=await connectToSqlDatabase();
//WEBSOKET-SERVER (REALTIME COMMUNICATION)
configureWebSocket(wss,db,SQLBD);
//API ENDPOINTS
configureRoutes(app,db);
}
yieldingConnetion();

//Start-Servers
server.listen(port,()=>{
    console.log('server running on: '+port)
})
//END SERVER
