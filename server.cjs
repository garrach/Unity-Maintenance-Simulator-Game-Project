const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const crypto = require('crypto');
const http = require('http');
const WebSocket = require('ws');
const bcrypt = require('bcrypt');

const winston = require('winston');
const { ObjectId } = require('mongodb');
const { connectToDatabase } = require('./resources/js/utils/database.cjs');
const { handleVehicleMessages, Vehicle, getVehicleById } = require('./resources/js/handlers/VehiclesHandler.cjs');
const { handleDeviceMessages, Device } = require('./resources/js/handlers/DevicesHandler.cjs');
const { handleConnectionMessages, Connection } = require('./resources/js/handlers/ConnectionHandler.cjs');
const { handleLogin, Auth } = require('./resources/js/handlers/LoginHandler.cjs');
const { checkApiKey } = require('./middleware/ApikeyChecker.cjs');
const app = express();
const port = 3002;
const TMD={
  type:'',
  message:'',
  data:{},
}
const TMD2={
  type:'',
  message:'',
  data:{},
}
app.use(cors());
app.use(express.json());
app.use(checkApiKey);




const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
let fps = 0;
async function retriveUser(id, client) {
  const coll = client.collection('users');
  const cursor = coll.find({ _id: new ObjectId(id) });
  const result = await cursor.toArray();
  return await result;
}



// Setup Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

mongoose.connect('mongodb://localhost:27017/backupplan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
const clients = new Set();
const clientsName = new Map();
let xy = 0;

// Object to store active connections with additional data
const activeConnections = {};



//WEBSOKET-SERVER (REALTIME COMMUNICATION)
// Counter for connection index
let connectionIndex = 0;

wss.on('connection', (ws, req) => {
  clients.add(ws);
  // Increment the connection index for each connection
  connectionIndex++;
  // Extract information about the client from the request object
  const userAgent = req.headers['user-agent'] || '';
  const clientIP = req.connection.remoteAddress || '';

  const isBrowser = userAgent.toLowerCase().includes('mozilla') && userAgent.toLowerCase().includes('applewebkit');
  const isMobile = userAgent.toLowerCase().includes('mobile');

  const clientInfo = {
    ws,
    clientId: generateClientId(),
    connectionIndex,
    platform: isBrowser ? 'Browser' : 'Desktop App',
    userAgent,
    isMobile,
    clientIP,
    origin: req.headers.origin || '',
    protocol: req.headers['sec-websocket-protocol'] || '',
  };

  // Store the WebSocket instance along with custom data
  activeConnections[clientInfo.clientId] = clientInfo;

  console.log(`Client ${clientInfo.clientId} connected - Connection Index: ${connectionIndex}, Platform: ${clientInfo.platform}`);
  console.log(`User headers: ${JSON.stringify(req.headers)}`);
  console.log(`User Agent: ${clientInfo.userAgent}`);
  console.log(`Is Mobile: ${clientInfo.isMobile}`);
  console.log(`Client IP: ${clientInfo.clientIP}`);
  console.log(`Origin: ${clientInfo.origin}`);
  console.log(`WebSocket Protocol: ${clientInfo.protocol}`);

  ws.on('message', (msg) => {
    let parsedMessage = msg;
    parsedMessage = JSON.parse(msg);
    try {
      const { type = '', message = '', data = '' } = parsedMessage;
      TMD.type=type;
      TMD.message=message;
      TMD.data=data;
      console.log(parsedMessage)
      if (parsedMessage.vehicleSp) {
        fps += 1;
        broadcast(TMD)
        console.log(parsedMessage)
      }
      if (type === "poke") {
        fps += 2;
        console.log(clientsName)

        ws.send(JSON.stringify({type:'poke',message:'refresh',data:'grant refresh'}))
      }
      if (type === "deviceMoved type_here") {
        console.log(parsedMessage)
        broadcast({ type: 'deviceMoving', message: 'DeviceMoving-response', data: parsedMessage.data })
      }
      if (type === "type_here") {
        console.log(parsedMessage)
        broadcast({ type: 'unityOn', message: 'unity-response', data: parsedMessage.data })
      }
      if (type === "running") {
        fps += 10;
        const req = {
          body: {
            data: {
              user: "65c50f332bb660a7a0f0b77a",
              selectedOptions: parsedMessage.data.device_id,
              dataTosendvh: parsedMessage.data.vehicle_id,
            }
          }
        }
        const subData = parsedMessage.data;
        //broadcast(JSON.stringify(subData))
        //uploadConnection(req)
      }

      

        console.log(parsedMessage)
    } catch (error) {
      fps = 0;
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
    // Remove the closed connection from the object
    delete activeConnections[clientInfo.clientId];
    connectionIndex--;

    broadcast(JSON.stringify({type:'out' ,message: 'disconnected',data:ws}))
    clients.delete(ws);
  });
});
function broadcast({ type, message, data }) {
  const broadcastdata = {
    type: type,
    message: message,
    data: data,
  }
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(broadcastdata));
      //console.log(message)
    }
  });
}

function generateClientId() {
  return Date.now().toString();
}
//END WEBSOCKET-SERVER




//MONGOBD-CONNECTION (SAVE DATA in JSON FORMAT)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
//END


//API-KEY
const generateRandomHexString = (length) => {
  const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
  const hexString = randomBytes.toString('hex').slice(0, length);
  return hexString;
};

const retriveUsers = async function () {
}

async function uploadConnection(req) {
  const { user, selectedOptions, dataTosendvh } = req.body.data;
  console.log(selectedOptions);
  const newConnection = new Connection({ U_id: user, D_id: selectedOptions, V_id: dataTosendvh });
  await newConnection.save();

}

const message = { key: generateRandomHexString(16), usersCount: '65c50f332bb660a7a0f0b77a' };

//HTTP-HTTPS SERVER API (ENDPOINTS)
app.get('/api/user', async (req, res) => {
  try {
    res.send({ data: await retriveUser('65c50f332bb660a7a0f0b77a', db) })
  } catch (error) {
    console.log('invalid ID..')
    res.send({ error: 'invalid ID..' })
  }
});
app.get('/api/users', async (req, res) => {
  try {
    const result = await db.collection('users').find().toArray();
    res.json({ data: result })
  } catch (error) {
    console.log('invalid ID..')
    res.json({ error: 'invalid ID..' })
  }
});

app.post('/api/devices', async (req, res) => {
  const { name, type } = req.body;
  try {
    const newDevice = new Device({ name, type });
    await newDevice.save();
  } catch (error) {
    console.error('Error adding Device:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/devices', async (req, res) => {
  try {
    const devices = await db.collection("devices").find().toArray();
    res.json({ message: 'List of devices', data: devices });
  } catch (error) {
    console.error('Error listing devices:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/connections', async (req, res) => {
  try {
    uploadConnection(req);
    res.json({ message: 'Device added successfully', data: newDevice });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

});

app.get('/api/connections', async (req, res) => {
  /*if ((await db.collection('users').find().toArray()).length > 0 && req.query.q) {
    db.collection('users');
    const dataArr = [];
    try {
      const connections = await db.collection('connections').find().toArray();
      async function retriveUser(id) {
        for (let index = 0; index < connections.length; index++) {
          const element = connections[index];
          if (element.U_id === (id)) {
            const cl = db.collection('users');
            const cu = cl.find({ _id: new ObjectId(id) });
            const rest = await cu.toArray();
            dataArr.push({ U_id: rest[0].username, V_id: element.V_id, D_id: element.D_id });
          }
        }
        return dataArr;
      }
      res.json({ message: 'List of connections', data: await retriveUser(req.query.q) });
    } catch (error) {
      console.error('Error retrieving connections:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(403).send(JSON.stringify({type:'nice',message:'<p>fuck off</p>',data:'Hmmm'}));
  }*/
  const connections = await db.collection('connections').find().toArray();
  res.json({ message: 'List of connections', data:connections });

});

app.post('/api/vehicles', async (req, res) => {
  const { make, model, mpg, cylinders, displacement, horsepower, weight, acceleration, origin, year } = req.body;
  try {

    const newVehicle = new Vehicle({
      make: make, model: model, mpg: mpg, cylinders: cylinders,
      displacement: displacement, horsepower: horsepower,
      weight: weight, acceleration: acceleration, origin: origin, year: year
    });
    await newVehicle.save();
    res.json({ message: 'Vehicle added successfully', data: newVehicle });
  } catch (error) {
    console.error('Error adding vehicle:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/vehicles', async (req, res) => {
  let CarFound = null;
  if (req.query.q) {
    const car = await db.collection("vehicles");
    const cursor = car.find({ _id: new ObjectId(req.query.q) });
    const result = await cursor.toArray();
    CarFound = (result[0].Name)
    console.log(CarFound)
    res.json({ message: 'List of vehicles', data: CarFound });

  } else
    try {
      const vehicles = await db.collection("vehicles").find().toArray();
      res.json({ message: 'List of vehicles', data: vehicles });
    } catch (error) {
      console.error('Error retrieving vehicles:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/login', async (req, res) => {
  res.json(message);
});

app.post('/api/login', async (req, res) => {
  handleLogin(res, req.body, db)
});

app.listen(port, () => {
  console.log(`Server is listening on ^^ort ${port}`);
  server.listen(port + 2, () => {
    console.log(`Server WebSocket is listening on port ${port + 2}`);
  });
});
//END SERVER