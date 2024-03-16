const { handleVehicleMessages } = require('../handlers/VehiclesHandler.cjs');
const { handleDeviceMessages } = require('../handlers/DevicesHandler.cjs');
const { handleConnectionMessages } = require('../handlers/ConnectionHandler.cjs');
const { handleLogin } = require('../handlers/LoginHandler.cjs');


const { getConnectionById,
  getVehicleById,
  getDeviceById,
  getUserById,
  getAllConnections,
  getAllVehicles,
  getAllDevices,
  getAllUsers } = require('../handlers/RetriveHandler.cjs')
function configureRoutes(app, db) {

  try {
    //HTTP-HTTPS SERVER API (ENDPOINTS)
  app.get('/api/user', async (req, res) => {
    const conn = await getUserById(req.body.id, db);
    res.send(JSON.stringify({ data: conn }));
  });
  app.get('/api/users', async (req, res) => {
    const conn = await getAllUsers(db);;
    res.send(JSON.stringify({ data: conn }));
  });
  app.post('/api/devices', async (req, res) => {
    const mapUsers = req.body.data;
    mapUsers.forEach((device) => {
      handleDeviceMessages(res, device, db)
    })
  });
  app.get('/api/devices', async (req, res) => {
    const conn = await getAllDevices(db);
    res.send(JSON.stringify({ data: conn }));
  });
  app.get('/api/device', async (req, res) => {
    const conn = await getDeviceById(req.body.id, db);
    res.send(JSON.stringify({ data: conn }));
  });
  app.post('/api/connections', async (req, res) => {
    const mapUsers = req.body.data;
    mapUsers.forEach((connection) => {
      handleConnectionMessages(res, connection, db)
    })
  });
  app.get('/api/connections', async (req, res) => {
    const conn = await getAllConnections(db);
    res.send(JSON.stringify({ data: conn }));
  });
  app.get('/api/connection', async (req, res) => {
    const conn = await getConnectionById(req.body.id, db);
    res.send(JSON.stringify({ data: conn }));
  });
  app.post('/api/vehicles', async (req, res) => {
    const mapUsers = req.body.data;
    mapUsers.forEach((vehicle) => {
      handleVehicleMessages(res, vehicle, db)
    })
  });
  app.get('/api/vehicles', async (req, res) => {
    const conn = await getAllVehicles(db);
    res.send(JSON.stringify({ data: conn }));
  });
  app.get('/api/vehicle', async (req, res) => {
    const conn = await getVehicleById(req.body.id, db);
    res.send(JSON.stringify({ data: conn }));
  });
  app.get('/api/login', async (req, res) => {
    const conn = await getUserById(req.body.id, db);
    res.send(JSON.stringify({ data: conn }));
  });
  app.post('/api/login', async (req, res) => {
      const mapUsers = req.body.data;
      mapUsers.forEach((user) => {
        handleLogin(res, user, db)
      })
      res.send(JSON.stringify({type:'UserApiRegister',message:'User registered ',data:user}))
  });
  } catch (error) {
    console.log(error)
  }
}

module.exports = { configureRoutes };
