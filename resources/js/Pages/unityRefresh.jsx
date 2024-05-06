import { useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react"
import axios from 'axios';
import AlertDialog from "@/Components/AlertDialog";
const UnityRefresh = ({ DBsync }) => {
  const apiKey = 'YOUR_SECRET_API_KEY'; // Replace with your actual API key
  const arrMariaConnectionsData = useRef()
  const [userData, setUserData] = useState(null);
  const [devicesData, setDevicesData] = useState(null);
  const [connectionsData, setConnectionsData] = useState(null);
  const [vehiclesData, setVehiclesData] = useState(null);
  const [placementData, setPlacementData] = useState(null);
  const [validLogin, setValidLogin] = useState(true);
  const [validPOst, setValidPost] = useState();
  const [validPostPlace, setValidPostPlace] = useState();
  const retriveSt = useRef(null);
  const [dataIshere, setDataIshere] = useState(false);
  const { data, setData, post } = useForm({
    connections: null,
    Vehicle: null,
    Device: null,
    User: null,
    Schedule: null,
  });

  const dataSync = ['connections', 'Vehicle', 'Device', 'User', 'Schedule']
  const fetchData = async (endpoint, setDataFunction) => {
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
      setDataFunction(data.data);
      retriveSt.current = data.data;
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
      setDataFunction(responseData.data);
      retriveSt.current = true;
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
  const [clientPlacements,setClientPlacements]=useState({
    id:"663662aea3de738f421270ae",
  })
  const [searchPlacemnt,setSearchPlacement]=useState("")
  useEffect(() => {
    async function retrivePlacementData(id) {

      try {
        const response = await axios({
          method: 'GET',
          url: `http://localhost:3002/api/fetch-placement?id=${id}`,
          headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey,
          },
        });
        const data = response.data;
        setPlacementData(data.data);
        return data;

      } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        return null;
      }
    }
    if (userData && searchPlacemnt!=="") {
      userData.map(async(user) => {
        (user._id === clientPlacements.id) && await retrivePlacementData(user._id)
      })
    }

    async function getAdminData(){
      const dataToPlace=await retrivePlacementData('663662aea3de738f421270aa');
      setPlacementData(dataToPlace);
    }
    getAdminData();

    return ()=>{}
  }, [userData,searchPlacemnt])

  const handlSearch=(query)=>{
    setSearchPlacement(query)
    setClientPlacements({id:query})
  }
  const sysnncronize = async () => {
    try {
      //fetchDataPOST('/api/connections', { type: "addConnectin", message: 'syncData', data: data.connections }, setValidPost);
      //fetchDataPOST('/api/vehicles', { type: "addvehicles", message: 'syncData', data: data.Vehicle }, setValidPost);
      //fetchDataPOST('/api/devices', { type: "adddevices", message: 'syncData', data: data.Device }, setValidPost);
      //fetchDataPOST('/api/login', { type: "addUser", message: 'syncData', data: data.User }, setValidPost);
      userData.map(async(user)=>{
        placementData && 
        fetchDataPOST('/api/add-placement', { user_id: user._id , data: placementData }, setValidPostPlace);
      })

    } catch (error) {
    }
  }
  const dataFlush = () => {
    arrMariaConnectionsData.current && arrMariaConnectionsData.current.map((data, indexKey) => {
      setData((prevData) => ({ ...prevData, [dataSync[indexKey]]: data }));
    })
  }
  return <>
  <div>
    <input 
    type="text" name="search" id="search"
    value={searchPlacemnt}
    onChange={(e) => handlSearch(e.target.value)}
     />
  </div>
    {validLogin && <div className="p-12 bg-gray-300">
      <div className="MongoData bg-gray-300 p-4 rounded m-2">
        {retriveSt.current ? (
          <h1 className="text-xl font-bold">MongoDB Sync: Authorized</h1>
        ) : (
          <h1 className="text-xl font-bold">MongoDB Sync: Unauthorized</h1>
        )}
        <div>
          <ul>
            {userData && <li>
              <h3>User Data:</h3>
              <ul className="p-4 dark:bg-gray-300 mb-2 hover:bg-gray-200 rounded-md shadow-md transition-transform transform hover:scale-105">
                {userData && userData.map((user, index) => (
                  <li key={index}>{user._id}</li>
                ))}
              </ul>
            </li>}
            {devicesData && <li>
              <h3>Devices Data:</h3>
              <ul className="p-4 dark:bg-gray-300 mb-2 hover:bg-gray-200 rounded-md shadow-md transition-transform transform hover:scale-105">
                {devicesData && devicesData.map((device, index) => (
                  <li key={index}>{device._id}</li>
                ))}
              </ul>
            </li>}
            {connectionsData && <li>
              <h3>Connections Data:</h3>
              <ul className="p-4 dark:bg-gray-300 mb-2 hover:bg-gray-200 rounded-md shadow-md transition-transform transform hover:scale-105">
                {connectionsData && connectionsData.map((connection, index) => (
                  <li key={connection._id}>{connection._id}</li>
                ))}
              </ul>
            </li>}
            {vehiclesData && <li>
              <h3>Vehicles Data:</h3>
              <ul className="p-4 dark:bg-gray-300 mb-2 hover:bg-gray-200 rounded-md shadow-md transition-transform transform hover:scale-105">
                {vehiclesData.map((vehicle, index) => (
                  <li key={index}>{vehicle._id}</li>
                ))}
              </ul>
            </li>}
          </ul>
        </div>
      </div>
      <div className="MariaData fixed bg-gray-300 p-4 rounded m-2">
        {retriveSt.current ? (
          <h1 className="text-xl font-bold">HeidiData Sync MongoDB : Authorized</h1>
        ) : (
          <h1 className="text-xl font-bold">HeidiData Sync MongoDB: Unauthorized</h1>
        )}
        <ul>
          {arrMariaConnectionsData.current && arrMariaConnectionsData.current.map((data, index) => (
            <li key={index} style={{ marginLeft: ((index + 1) * 10) + 'rem', marginTop: ((index + 1) * 4) + 'rem', display: 'none' }} className={`absolute h-80 overflow-y-auto overflow-x-hidden p-4 dark:bg-gray-300 mb-2 hover:bg-gray-200 rounded-md shadow-md transition-transform transform hover:scale-105`}>
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
        {data.connections ?
          <AlertDialog title='Data Sysnncronize Successfull' message={`The data synchronization process has completed successfully. All systems are now up-to-date with the latest information, ensuring consistency and accuracy across the platform. If you have any questions or encounter any issues, please contact our support team for assistance. Thank you for your attention.`} onClose={sysnncronize()} />
          : <button className="bg-orange-500 p-4 hover:bg-orange-300 rounded" onClick={dataFlush}>CleanDATA</button>}
      </div>

    </div>}
    <style>{`
    .MariaData{
      top:1rem;
      right:50rem;
    }
    `}</style>
  </>
}
export default UnityRefresh;