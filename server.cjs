const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const { checkApiKey } = require('./resources/js/middleware/ApikeyChecker.cjs');
const { configureRoutes } = require('./resources/js/config/routesConfig.cjs');
const { configureWebSocket } = require('./resources/js/config/webSocketConfig.cjs');
const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());
app.use(checkApiKey);
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

mongoose.connect('mongodb://localhost:27017/backupplan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;


//MONGOBD-CONNECTION (SAVE DATA in JSON FORMAT)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
//END

//WEBSOKET-SERVER (REALTIME COMMUNICATION)
configureWebSocket(wss,db);
//API ENDPOINTS
configureRoutes(app,db);

//Start-Servers
app.listen(port, () => {
  console.log(`Server is listening on ^^ort ${port}`);
  server.listen(port + 2, () => {
    console.log(`Server WebSocket is listening on port ${port + 2}`);
  });
});
//END SERVER