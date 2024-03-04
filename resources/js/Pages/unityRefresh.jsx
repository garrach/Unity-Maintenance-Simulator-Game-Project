import { useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react"
import axios from 'axios';
const UnityRefresh = ({ DBsync }) => {
  const apiKey = 'YOUR_SECRET_API_KEY'; // Replace with your actual API key
  const arrMariaConnectionsData = useRef()
  const [userData, setUserData] = useState(null);
  const [devicesData, setDevicesData] = useState(null);
  const [connectionsData, setConnectionsData] = useState(null);
  const [vehiclesData, setVehiclesData] = useState(null);
  const [validLogin,setValidLogin]=useState(true);
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
const fetchData = async ( endpoint, setDataFunction) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `http://localhost:3002${endpoint}`,
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
    });
    const data = response.data;
    setDataFunction(data.data); // Assuming the data object has a 'data' property
    retriveSt.current = data.data;
    console.log(response.data);
  } catch (error) {
    retriveSt.current = false;
    console.error(`Error fetching data from ${endpoint}:`, error);
  }
};
const fetchDataPOST = async (endpoint, data, setDataFunction) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `http://localhost:3002${endpoint}`,
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      data: data, // Include your data payload here
    });
    const responseData = response.data;
    setDataFunction(responseData.data); // Assuming the data object has a 'data' property
    retriveSt.current = true;
    console.log(response.data);
  } catch (error) {
    retriveSt.current = false;
    console.error(`Error fetching data from ${endpoint}:`, error);
  }
};
  const retriveDataFromMongoDB = () => {
    // Fetch data from different endpoints on component mount
    fetchData('/api/users', setUserData);
    fetchData('/api/devices', setDevicesData);
    fetchData('/api/connections', setConnectionsData);
    fetchData('/api/vehicles', setVehiclesData);
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
  const sysnncronize = (e) => {
    e.preventDefault();
    try {
      fetchDataPOST('/api/connections',{type:"addConnectin",message:'syncData',data:data.connections},setValidPost);
      fetchDataPOST('/api/vehicles',{type:"addvehicles",message:'syncData',data:data.Vehicle},setValidPost);
      fetchDataPOST('/api/devices',{type:"adddevices",message:'syncData',data:data.Device},setValidPost);
      fetchDataPOST('/api/login',{type:"addUser",message:'syncData',data:data.User},setValidPost);
    } catch (error) {
      console.log(data)
    }
  }
  const dataFlush=()=>{
    console.log(data);
      arrMariaConnectionsData.current && arrMariaConnectionsData.current.map((data, indexKey) => {
      setData((prevData) => ({ ...prevData, [dataSync[indexKey]]: data }));
    })
  }
  return <>
   {validLogin && <div className="grid grid-cols-3 p-12">
      <div className="MongoData bg-gray-300 p-4 rounded m-2">
        {retriveSt.current ? <h1>{`Unity MongoDB sync:authorized`}</h1> : <h1>{`Unity MongoDB sync:Unauthorized`}</h1>}
        <div>
          <ul>
            {userData && <li>
              <h3>User Data:</h3>
              <ul>
                {userData && userData.map((user, index) => (
                  <li key={index}>{user._id}</li>
                ))}
              </ul>
            </li>}
            {devicesData && <li>
              <h3>Devices Data:</h3>
              <ul>
                {devicesData && devicesData.map((device, index) => (
                  <li key={index}>{device._id}</li>
                ))}
              </ul>
            </li>}
            {connectionsData && <li>
              <h3>Connections Data:</h3>
              <ul>
                {connectionsData && connectionsData.map((connection, index) => (
                  <li key={connection._id}>{connection._id}</li>
                ))}
              </ul>
            </li>}
            {vehiclesData && <li>
              <h3>Vehicles Data:</h3>
              <ul>
                {vehiclesData.map((vehicle, index) => (
                  <li key={index}>{vehicle._id}</li>
                ))}
              </ul>
            </li>}
          </ul>
        </div>
      </div>
      <div className="MariaData bg-gray-300 p-4 rounded m-2">
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
        {data.connections ? <form onSubmit={sysnncronize}>
          <button className="bg-orange-500 p-4 hover:bg-orange-300 rounded">SyncDATA</button>
        </form>: <button className="bg-orange-500 p-4 hover:bg-orange-300 rounded" onClick={dataFlush}>CleanDATA</button>}
      </div>
    </div>}
  </>
}
export default UnityRefresh;