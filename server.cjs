const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const crypto = require('crypto');
const http = require('http');
const WebSocket = require('ws');
const winston = require('winston');
const { ObjectId } = require('mongodb');

const { connectToDatabase } = require('./resources/js/utils/database.cjs');
const { handleVehicleMessages,Vehicle,getVehicleById } = require('./resources/js/handlers/VehiclesHandler.cjs');
const { handleDeviceMessages,Device } = require('./resources/js/handlers/DevicesHandler.cjs');
const { handleConnectionMessages,Connection } = require('./resources/js/handlers/ConnectionHandler.cjs');
const { handleLogin, Auth } = require('./resources/js/handlers/LoginHandler.cjs');
const app = express();
const port = 3002;
app.use(cors());
app.use(express.json());
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
let fps=0;
async function retriveUser(id,client){
const coll = client.collection('users');
const cursor = coll.find({_id: new ObjectId(id)});
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

mongoose.connect('mongodb://localhost:27017/vr-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
const clients = new Set();


wss.on('connection', (ws,req) => {
  clients.add(ws);
  const clientAddress = req.connection.remoteAddress;
  const clientPort = req.connection.remotePort;
  ws.on('message', (message) => {
    let parsedMessage = message; 
    try {
      parsedMessage = JSON.parse(message);
     if(parsedMessage.type==="greet"){
       fps+=1;
       console.log(parsedMessage.type)
     }
    if(parsedMessage.type==="web"){
      fps+=2;
    }  
    if(parsedMessage.type==="running"){
      fps+=10;
    }  
    broadcast(JSON.stringify({message:parsedMessage.data}))
    } catch (error) {
      fps=0;
    }
    console.log('User message');
  });
  ws.on('open',()=>{
    console.log('User data');
  })
  logger.info('User connected');
  ws.on('close', () => {
    logger.info('User disconnected');
    broadcast(JSON.stringify({message:'disconnected'}))
    clients.delete(ws);
  });
});
function broadcast(message) {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
      //console.log(message)
    }
  });
}



db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});



const generateRandomHexString = (length) => {
  const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
  const hexString = randomBytes.toString('hex').slice(0, length);
  return hexString;
};


app.get('/api/user',async (req, res) => {
  try {
    res.send({data:await retriveUser('65c154bcecc4a1cb5b2566ed',db)})
  } catch (error) {
    console.log('invalid ID..')
    res.send({error:'invalid ID..'})
  }
 });

app.post('/api/devices', async (req, res) => {
  const { name, type } = req.body;
  try {
    const newDevice = new Device({ name, type });
    await newDevice.save();
    res.json({ message: 'Device added successfully', data: newDevice });
  } catch (error) {
    console.error('Error adding Device:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/devices', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json({ message: 'List of devices', data: devices });
  } catch (error) {
    console.error('Error listing devices:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/api/connections', async (req, res) => {
  try {
    const {user, selectedOptions, dataTosendvh } = req.body.data;
    
    console.log(selectedOptions);
    const newConnection = new Connection({U_id:user,D_id:selectedOptions,V_id:dataTosendvh});
    await newConnection.save();
    res.json({ message: 'Connection added successfully', data: newConnection });
  } catch (error) {
    console.error('Error adding Connection:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/api/connections', async (req, res) => {
  if( (await db.collection('users').find().toArray()).length >0){
    db.collection('users');

    const dataArr=[];
    try {
    const connections = await db.collection('connections').find().toArray();
    async function retriveUser(id){
      for (let index = 0; index < connections.length; index++) {
        const element = connections[index];
        if(element.U_id===(id)){
          const cl = db.collection('users');
          const cu = cl.find({_id: new ObjectId(id)});
          const rest = await cu.toArray();
          dataArr.push({U_id:rest[0].username,V_id:element.V_id,D_id:element.D_id});
        }
      }
      return dataArr;
    }
    res.json({ message: 'List of connections', data: await retriveUser(req.query.q)});
  } catch (error) {
    console.error('Error retrieving connections:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
});

app.post('/api/vehicles', async (req, res) => {
  const {make,model,mpg,cylinders,displacement,horsepower,weight,acceleration,origin,year} = req.body;
  try {
    console.log(req.body)
    const newVehicle = new Vehicle({make:make,model:model,mpg:mpg,cylinders:cylinders,
      displacement:displacement,horsepower:horsepower,
      weight:weight,acceleration:acceleration,origin:origin,year:year});
    await newVehicle.save();
    res.json({ message: 'Vehicle added successfully', data: newVehicle });
  } catch (error) {
    console.error('Error adding vehicle:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/vehicles', async (req, res) => {
  let CarFound=null;
  if (req.query.q) {
    const car = await db.collection("vehicles");
    const cursor = car.find({_id: new ObjectId(req.query.q)});
    const result = await cursor.toArray();
    CarFound=(result[0].Name)
    console.log(CarFound)
    res.json({ message: 'List of vehicles', data: CarFound });

  }else
  try {
    const vehicles = await db.collection("vehicles").find().toArray();
    res.json({ message: 'List of vehicles', data: vehicles });
  } catch (error) {
    console.error('Error retrieving vehicles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


const retriveUsers=async function (){
  const coll = db.collection('users');
  const cursor = coll.find();
  const result = (await cursor.toArray());
  if(result.length>0){
    return await result;
  }else{
    return 0;
  }
  } 

const message = { key: generateRandomHexString(16), usersCount:'65c50f332bb660a7a0f0b77a'};

app.get('/login', async (req, res) => {
  res.json(message);
});

app.post('/login', async (req, res) => {
  handleLogin(res,req.body,db)
});

app.listen(port, () => {
  console.log(`Server is listening on ^^ort ${port}`);
  server.listen(port+2, () => {
    console.log(`Server WebSocket is listening on port ${port+2}`);
  });
});