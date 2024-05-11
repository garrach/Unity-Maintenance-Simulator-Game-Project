import { usePage } from '@inertiajs/react';
import React, { useEffect, useRef, useState } from 'react';
import RealtimeTrackerChart from './RealtimeTrackerChart';
import GraphComponent from '@/Components/GraphComponent';
import { serverResponse } from '../client.cjs'
// Defining the Analytics component
const Analytics = ({ webSocket, stat, auth }) => {
  
  const [currentResponse, setCurrentResponse] = useState(null);
  
  useEffect(()=>{
    setCurrentResponse(serverResponse)
  })
  const { props } = usePage(); // Getting page properties using Inertia.js hook

  const [LiveFeedAvailable, setLiveFeedAvailable] = useState(false); // Variable determining whether live feed is available or not
  const [LiveFeedElemnt, setLiveFeedElemnt] = useState({ Devices: [{ name: 'unityStatDV', id: 0 }], Vehicles: [{ name: 'unityStatVH', id: 0 }] }); // Variable determining whether live feed is available or not

  // Function to toggle live feed availability
  const toggleLiveFeed = (e) => {
    e.preventDefault();
    if (LiveFeedElemnt.Vehicles.id !== 0) {
      setLiveFeedAvailable(prevState => !prevState); // Toggle the state
    }
    if (LiveFeedElemnt.Devices.id !== 0) {
      setLiveFeedAvailable(prevState => !prevState); // Toggle the state
    }
  };



  const [unity, setUnity] = useState(null);
  const messageRef = useRef();
  const IsTestingRef = useRef(false);
  const avoid={stat:true};
  useEffect(() => {
      if (stat) {
        try {
          webSocket.send(JSON.stringify({ type: "unityStatDV", message: "ask for deviceStat Running", data: auth }))
          webSocket.addEventListener('message', (message) => {
            try {
              const data = JSON.parse(message.data);
              try {
                if (data.type === "deviceStat") {
                  console.log('Recive : ', data);
                  setUnity(data.data);
                  setLiveFeedElemnt({
                    Devices: [{
                      name: 'unity device',
                      id: data.data
                    }
                    ]
                  })
                  setLiveFeedAvailable(true);
                  messageRef.current = data.data;
                } else {
                  setLiveFeedAvailable(false);
  
                }
              } catch (error) {
                console.log('Error:', { error: 'Message not from unity..' })
              }
            } catch (error) {
              console.log('Error:', { error: 'Message Parsing faild..' })
            }
          })
        } catch (error) {
          return;
        }
      } else
        try {
          webSocket.send(JSON.stringify({ type: "unityStatVH", message: "ask for vehicleStat Running", data: { auth } }))
          webSocket.addEventListener('message', (message) => {
            try {
              const data = JSON.parse(message.data);
              try {
                if (data.type === "vehicleStat") {
                  console.log('Recive : ', data);
                  setUnity(data.data);
                  setLiveFeedElemnt({
                    Vehicles: [{
                      name: 'unity Vehicle',
                      id: data.data
                    }
                    ]
                  })
                  setLiveFeedAvailable(true);
                  messageRef.current = data.data;
                } else {
                  setLiveFeedAvailable(false);
                }
              } catch (error) {
                console.log('Error:', { error: 'Message not from unity..' })
              }
            } catch (error) {
              console.log('Error:', { error: 'Message Parsing faild..' })
            }
          })
        } catch (error) {
          return;
        }
   
   
    return () => {
      avoid.stat=false;
    }
  }, [webSocket])
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="bg-gray-200 dark:bg-gray-900 py-4 px-6 border-b border-gray-300 dark:border-gray-700">
          {/* Example: */}
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Dashboard - <span className='font-bold uppercase'>{auth.user.role}</span> : <span>{
              stat ? <span>Client selected Device</span> : <span> Client Vehicle</span>
            }</span>
          </h1>
        </header>

        {/* Main content */}
        <div className="flex-1 bg-gray-100 dark:bg-gray-900 p-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4 dark:text-gray-200">Graphs/Analytics
              <span className='ml-2 text-sm'>
                {stat ?
                  `${LiveFeedElemnt.Devices[0].name}: ${(typeof LiveFeedElemnt.Devices[0].id === "string") ? LiveFeedElemnt.Devices[0].id : auth.user.name}` :
                  `${LiveFeedElemnt.Vehicles[0].name}: ${LiveFeedElemnt.Vehicles[0].id}`
                }
              </span>
            </h2>

            {/* Conditionally rendering components based on LiveFeedAvailable */}
            {LiveFeedAvailable ? (
              <GraphComponent jsonData={unity} />
            ) : (
              <div className="text-red-500 mb-4">
                Live feed is not available at the moment.
              </div>
            )}

            {/* Button to toggle live feed availability */}
            <button onClick={(e) => { toggleLiveFeed(e) }} className="px-4 py-2 bg-blue-500 text-white rounded-md">
              {LiveFeedAvailable ? "Disable Live Feed" : "Enable Live Feed"}
            </button>
          </div>
        </div>
      </div>
    </div>




  );
};

export default Analytics;
