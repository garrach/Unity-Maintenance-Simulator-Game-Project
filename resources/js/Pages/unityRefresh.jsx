import { useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react"

const UnityRefresh = ({ DBsync }) => {

  const apiKey = 'YOUR_SECRET_API_KEY'; // Replace with your actual API key
  const arrMariaConnectionsData = useRef()
  const [userData, setUserData] = useState(null);
  const [devicesData, setDevicesData] = useState(null);
  const [connectionsData, setConnectionsData] = useState(null);
  const [vehiclesData, setVehiclesData] = useState(null);

  const[validPOst,setValidPost]=useState();
  const retriveSt = useRef(null);
  const [dataIshere, setDataIshere] = useState(false);

  const { data, setData, post } = useForm({
    connections: null,
    Vehicle: null,
    Device: null,
    User: null,
    Reminder: null,
    Schedule: null,
  });

  const dataSync = ['connections', 'Vehicle', 'Device', 'User', 'Reminder', 'Schedule']

  const fetchData = async (method,endpoint, setDataFunction) => {
    try {
      const response = await fetch(`http://localhost:3002${endpoint}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey,
        },
      });
      const data = await response.json();
      setDataFunction(data.data); // Assuming the data object has a 'data' property
      retriveSt.current = data.data;
    } catch (error) {
      retriveSt.current = false;
      console.error(`Error fetching data from ${endpoint}:`, error);

    }
  };
  const retriveDataFromMongoDB = () => {
    // Fetch data from different endpoints on component mount
    fetchData('GET','/api/users', setUserData);
    fetchData('GET','/api/devices', setDevicesData);
    fetchData('GET','/api/connections', setConnectionsData);
    fetchData('GET','/api/vehicles', setVehiclesData);
    console.log('retriveDataFromMongoDB')
    setDataIshere(true)
  }
  const handleInputChange = (e, filed) => {
    e.preventDefault();
    const { key, value } = filed;
    setData((prevData) => ({ ...prevData, [key]: value }));
  };
  const retriveDataFromMariaDB = () => {
    console.log('retriveDataFromMariaDB')
    arrMariaConnectionsData.current = DBsync;
  }
  let x = 0;
  useEffect(() => {
    retriveDataFromMongoDB()
    return () => {
    };
  }, [dataIshere])
  useEffect(() => {
    arrMariaConnectionsData.current = []
    retriveDataFromMariaDB()
    return () => {
      arrMariaConnectionsData.current = []
    };
  }, [])
  const sysnncronize = async (e) => {
    e.preventDefault();
    try {
      arrMariaConnectionsData.current && arrMariaConnectionsData.current.map((data, indexKey) => {
        setData((prevData) => ({ ...prevData, [dataSync[indexKey]]: data }));
      })
      fetchData('POST','/api/connections',setValidPost);
      fetchData('POST','/api/vehicles',setValidPost);
      fetchData('POST','/api/devices',setValidPost);
      fetchData('POST','/api/login',setValidPost);
    } catch (error) {
      console.log(data)
    }
  }
  return <>
    <div className="grid grid-cols-3">
      <div className="MongoData">
        {retriveSt.current ? <h1>{`Unity MongoDB sync:authorized`}</h1> : <h1>{`Unity MongoDB sync:Unauthorized`}</h1>}
        <div>
          <ul>
            {userData && <li>
              <h3>User Data:</h3>
              <ul>
                {userData && userData.map((user, index) => (
                  <li key={index}>{user.username}</li>
                ))}
              </ul>
            </li>}

            {devicesData && <li>
              <h3>Devices Data:</h3>
              <ul>
                {devicesData && devicesData.map((device, index) => (

                  <li key={index}>{device.name}</li>

                ))}
              </ul>
            </li>}

            {connectionsData && <li>
              <h3>Connections Data:</h3>
              <ul>
                {connectionsData && Object.entries(connectionsData).map((connection, index) => (
                  <li key={connection._id}>{connection._id}</li>
                ))}
              </ul>
            </li>}

            {vehiclesData && <li>
              <h3>Vehicles Data:</h3>
              <ul>
                {vehiclesData.map((vehicle, index) => (
                  <li key={index}>{vehicle.Name}</li>
                ))}
              </ul>
            </li>}
          </ul>
        </div>
      </div>
      <div className="MariaData">
        <ul>
          {arrMariaConnectionsData.current && arrMariaConnectionsData.current.map((data, index) => (
            <li key={index}>
              <ul>
                <li>---------------:{dataSync[index]}:-------------</li>
                {data.map((d, index) => (
                  <li key={index}> <ul key={index}>
                    {Object.entries(d).map(([key, value], index) => (
                      <li onClick={(e) => { handleInputChange(e, { key, value }) }} key={index}>{`KEY:${key} | Value:${value}`}</li>

                    )
                    )}
                  </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="action">
        <form onSubmit={sysnncronize} method="get">
          <button>SyncDATA</button>
        </form>
      </div>
    </div>

  </>
}
export default UnityRefresh;