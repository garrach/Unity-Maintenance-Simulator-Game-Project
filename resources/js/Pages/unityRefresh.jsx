import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react"
import axios from 'axios';
import AlertDialog from "@/Components/AlertDialog";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import  getDomainString  from "@/Pages/DomainProviderFR.mjs";
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

  const { props } = usePage();


  const dataSync = ['connections', 'Vehicle', 'Device', 'User', 'Schedule']
  const fetchData = async (endpoint, setDataFunction) => {
    try {
      const response = await axios({
        method: 'GET',
        url: `http://${getDomainString()}${endpoint}`,
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
        url: `http://${getDomainString()}${endpoint}`,
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
  const [clientPlacements, setClientPlacements] = useState({
    id: "663662aea3de738f421270ae",
  })
  const [searchPlacemnt, setSearchPlacement] = useState("")
  useEffect(() => {
    async function retrivePlacementData(id) {
      try {
        const response = await axios({
          method: 'GET',
          url: `http://${getDomainString()}/api/fetch-placement?id=${id}`,
          headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey,
          },
        });
        const data = response.data;
        setPlacementData(data.data.data);
        return data.data;

      } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        return null;
      }
    }
    if (userData && searchPlacemnt !== "") {
      userData.map(async (user) => {
        (user._id === clientPlacements.id) && await retrivePlacementData(user._id)
      })
    }

    async function getAdminData() {
      const dataToPlace = await retrivePlacementData('663662aea3de738f421270aa');
      setPlacementData(dataToPlace);
    }
    //getAdminData();

    return () => { }
  }, [userData, searchPlacemnt])

  const handlSearch = (query) => {
    setSearchPlacement(query)
    setClientPlacements({ id: query })
  }
  const sysnncronize = async () => {
    try {
      fetchDataPOST('/api/connections', { type: "addConnectin", message: 'syncData', data: data.connections }, setValidPost);
      fetchDataPOST('/api/vehicles', { type: "addvehicles", message: 'syncData', data: data.Vehicle }, setValidPost);
      fetchDataPOST('/api/devices', { type: "adddevices", message: 'syncData', data: data.Device }, setValidPost);
      fetchDataPOST('/api/login', { type: "addUser", message: 'syncData', data: data.User }, setValidPost);

      const placementData00 = {
        "vehicleSp": {
          "name": "benz01",
          "position": {
            "x": 4.152522,
            "y": 0.2631281,
            "z": 0.009116761
          }
        },
        "devicesSp": [
          {
            "name": "placement, Boss stereo speakers",
            "position": {
              "x": 0.0533,
              "y": 0.815,
              "z": 0.437
            }
          },
          {
            "name": "placement, Speedmeters Display Dash Monitor",
            "position": {
              "x": -0.5,
              "y": 1.1225,
              "z": 0.5855
            }
          },
          {
            "name": "placement, Samsung Super Fast Dual Car Charger",
            "position": {
              "x": 0.432,
              "y": 1.2852,
              "z": -0.7239
            }
          },
          {
            "name": "placement, Touch Screen Entertainment System AC ControlzC",
            "position": {
              "x": 0.0098,
              "y": 0.707,
              "z": -0.4223
            }
          },
          {
            "name": "placement, Window Switch Door Lock Front Driver Side with Mirror Switch",
            "position": {
              "x": 0.0639,
              "y": 0.8054,
              "z": 0.2059
            }
          },
          {
            "name": "placement, Rearview Camera",
            "position": {
              "x": 1.255,
              "y": 0.9035,
              "z": 0.415
            }
          },
          {
            "name": "placement, Car TV Screen Rear Seat Entertainment System",
            "position": {
              "x": 0,
              "y": 0.641,
              "z": -3.45
            }
          }
        ]
      }
      fetchDataPOST('/api/add-placement', { data: placementData00, IDs: userData }, setValidPostPlace);


    } catch (error) {
    }
  }
  const dataFlush = () => {
    arrMariaConnectionsData.current && arrMariaConnectionsData.current.map((data, indexKey) => {
      setData((prevData) => ({ ...prevData, [dataSync[indexKey]]: data }));
    })
  }
  const AdminDataFound = () => {
    return (
      <>
        {(placementData && (searchPlacemnt === "663662aea3de738f421270aa")) &&
          <div className="absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg p-8 relative">
              <span className="w-10 h-10 absolute top-4 right-0">
                <Link href="#">X</Link>
              </span>
              <h1 className="text-3xl font-bold mb-4">{props.auth.user.name}</h1>
              <h2 className="text-2xl font-bold mb-4">Placement Data</h2>
              <table className="w-full">
                <tbody>
                  {Object.entries(placementData).map(([key, hisData], index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{`${key}`}</td>
                      <td className="border border-gray-300 px-4 py-2">{`${hisData}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        }
      </>
    );
  };

  return (
    <>
      <AuthenticatedLayout
        user={props.auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">WEB-APP/Server Resources</h2>}
      >
        <Head title="WEB-APP/Server Resources" />
        <AdminDataFound />
        <div className="container mx-auto p-8 dark:text-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <input
                type="text"
                name="search"
                id="search"
                value={searchPlacemnt}
                onChange={(e) => handlSearch(e.target.value)}
                className="border dark:bg-gray-800 border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            {validLogin && (
              <div className="space-y-8 relative">
                <div className="mongo-data">
                  <h1 className="text-2xl font-bold dark:text-gray-200 mb-4">
                    {retriveSt.current
                      ? "MongoDB Sync: Authorized"
                      : "MongoDB Sync: Unauthorized"}
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {userData && (
                      <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h3 className="text-lg font-semibold mb-2">Users Data:</h3>
                        <ul className="overflow-y-auto overflow-x-hidden max-h-56">
                          {userData.map((user, index) => (
                            <li key={index} className="mb-2">{user._id}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {devicesData && (
                      <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h3 className="text-lg font-semibold mb-2">Devices Data:</h3>
                        <ul className="overflow-y-auto overflow-x-hidden max-h-56">
                          {devicesData.map((device, index) => (
                            <li key={index} className="mb-2">{device._id}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {connectionsData && (
                      <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h3 className="text-lg font-semibold mb-2">Connections Data:</h3>
                        <ul className="overflow-y-auto overflow-x-hidden max-h-56">
                          {connectionsData.map((connection, index) => (
                            <li key={index} className="mb-2">{connection._id}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {vehiclesData && (
                      <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                        <h3 className="text-lg font-semibold mb-2">Vehicles Data:</h3>
                        <ul className="overflow-y-auto overflow-x-hidden max-h-56">
                          {vehiclesData.map((vehicle, index) => (
                            <li key={index} className="mb-2">{vehicle._id}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="maria-data">
                  <h1 className="text-2xl font-bold dark:text-gray-200 mb-4">
                    {retriveSt.current
                      ? "HeidiData Sync MongoDB : Authorized"
                      : "HeidiData Sync MongoDB: Unauthorized"}
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {arrMariaConnectionsData.current &&
                      arrMariaConnectionsData.current.map((data, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                          <table className="table-auto w-full">
                            <tbody>
                              {Object.entries(data).map(([key, value], index0) => (
                                <tr key={index0} className="border-b border-gray-200">
                                  <td className="font-semibold py-2 px-4">{key}</td>
                                  <td className="py-2 px-4">
                                    <table>
                                      <tbody>
                                        {Object.entries(value).map(([subKey, subValue], index1) => (
                                          <tr key={index1}>
                                            <td className="py-1 px-2 font-semibold">{subKey}</td>
                                            <td className="py-1 px-2">{subValue}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                  </div>

                </div>
                <div className="action">
                  {data.connections ? (
                    <AlertDialog
                      title="Data Synchronization Successful"
                      message={`The data synchronization process has completed successfully. All systems are now up-to-date with the latest information, ensuring consistency and accuracy across the platform. If you have any questions or encounter any issues, please contact our support team for assistance. Thank you for your attention.`}
                      onClose={sysnncronize}
                    />
                  ) : (
                    <button
                      className="bg-blue-500 absolute top-0 right-0 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={dataFlush}
                    >
                      Synchronize Data
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </AuthenticatedLayout>

    </>
  );

}
export default UnityRefresh;