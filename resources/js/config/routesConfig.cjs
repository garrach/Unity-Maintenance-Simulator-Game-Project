const { handleVehicleMessages } = require('../handlers/VehiclesHandler.cjs');
const { handleDeviceMessages } = require('../handlers/DevicesHandler.cjs');
const { handleConnectionMessages } = require('../handlers/ConnectionHandler.cjs');
const { handleLogin } = require('../handlers/LoginHandler.cjs');


const { getConnectionById,
  getVehicleById,
  getDeviceById,
  getDeviceByDBId,
  getUserById,
  getAllConnections,
  getAllConnectionsByUser,
  getAllVehicles,
  getAllDevices,
  getAllUsers, textToSpeech ,fetch_placement,Add_placement} = require('../handlers/RetriveHandler.cjs')




async function retriveUserDevices(IsApi, id, ws, res, db) {
  let devices = [];

  const user = await getUserById(id, db);
  if (user) {


    const conn = await getAllConnectionsByUser(user.BD_id, db);

    if (conn) {
      conn.forEach(async (c) => {
        devices.push(c.DDB_id);
      });

      if (devices.length > 0) {
        const Userdevices = [];

        for (const d of devices) {
          const dv = await getDeviceByDBId(d, db);
          Userdevices.push(dv);
        }

        if (IsApi) {
          res.send(JSON.stringify({ data: Userdevices }));
        } else {
          ws.send(JSON.stringify({ type: 'devices', message: 'retrive user Devices for this room', data: Userdevices }))
        }
      }
    }
  }
}


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
      retriveUserDevices(true, req.query.q, null, res, db);
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
      let usertmp = null;
      if (mapUsers)
        mapUsers.forEach((user) => {
          handleLogin(res, user, db)
          usertmp = user;
        })
      res.send(JSON.stringify({ type: 'UserApiRegister', message: 'User registered ', data: usertmp }))
    });

    app.get('/api/speech', async (req, res) => {
     
       await textToSpeech(req.query.key,res);

    })

    app.get('/api/fetch-placement', async (req, res) => {
     
      try {
        const response = await fetch_placement(req.query.id,db);
        res.send({ type: 'UserApiRegistedPlacement', message: 'Device Placement registered ', data: response })
      } catch (error) {
        res.send(req.query)
        console.log(req.query)
      }
      


   })

   app.post('/api/add-placement', async (req, res) => {

     try {
      const resp=await Add_placement(req.body,db);
      console.log(resp)
      res.send({ type: 'UserApiRegistedPlacement', message: 'New Placement registered ', data: {} })
    } catch (error) {
      res.send({ type: 'fatal', message: 'Error adding New Placement', data: {} })
    } 

 })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { configureRoutes, retriveUserDevices };
