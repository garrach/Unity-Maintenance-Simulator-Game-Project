import { usePage } from '@inertiajs/react';
import React, { useEffect, useRef, useState } from 'react';
import RealtimeTrackerChart from './RealtimeTrackerChart'; 

// Defining the Analytics component
const Analytics = ({webSocket,stat,auth}) => {

  const { props } = usePage(); // Getting page properties using Inertia.js hook
  
  const [LiveFeedAvailable, setLiveFeedAvailable] = useState(false); // Variable determining whether live feed is available or not
  const [LiveFeedElemnt, setLiveFeedElemnt] = useState({Devices:[{name:'unityStatDV',id:0}],Vehicles:[{name:'unityStatVH',id:0}]}); // Variable determining whether live feed is available or not

  // Function to toggle live feed availability
  const toggleLiveFeed = (e) => {
    e.preventDefault();
    setLiveFeedAvailable(prevState => !prevState); // Toggle the state
  };



  const [unity,setUnity]=useState(null);
  const messageRef=useRef();
  useEffect(()=>{
    if(stat){
      try {
        webSocket.send(JSON.stringify({type:"unityStatDV",message:"ask for deviceStat Running",data:auth}))
        webSocket.addEventListener('message',(message)=>{ 
            try {
                const data= JSON.parse(message.data);
                console.log(data);
                try { 
                    if(data.type==="deviceStat"){
                        console.log('Recive : ',data);
                        setUnity(data.data);
                        setLiveFeedElemnt({
                          Devices:[{
                            name:'unity device',
                            id:data.data
                            }
                          ]
                        })
                        setLiveFeedAvailable(true);
                        messageRef.current=data.data;  
               }else{
                setLiveFeedAvailable(false);

               }
            } catch (error) {
                console.log('Error:', {error:'Message not from unity..'})   
            }
        } catch (error) {
            console.log('Error:', {error:'Message Parsing faild..'})
        }
    })
    } catch (error) {
        return;
    }
    }else
      try {
          webSocket.send(JSON.stringify({type:"unityStatVH",message:"ask for vehicleStat Running",data:auth}))
          webSocket.addEventListener('message',(message)=>{ 
              try {
                  const data= JSON.parse(message.data);
                  try { 
                      if(data.type==="vehicleStat"){
                          console.log('Recive : ',data);
                          setUnity(data.data);
                          setLiveFeedElemnt({
                            Vehicles:[{
                              name:'unity Vehicle',
                              id:data.data
                              }
                            ]
                          })
                          setLiveFeedAvailable(true);
                          messageRef.current=data.data;  
                 }else{
                  setLiveFeedAvailable(false);
                 }
              } catch (error) {
                  console.log('Error:', {error:'Message not from unity..'})   
              }
          } catch (error) {
              console.log('Error:', {error:'Message Parsing faild..'})
          }
      })
      } catch (error) {
          return;
      }
    
  },[webSocket])

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md h-full">
      <h2 className="text-lg font-semibold mb-2">Graphs/Analytics <span className='ml-2'>{stat ? <>{`${LiveFeedElemnt.Devices[0].name} : ${LiveFeedElemnt.Devices[0].id}`}</>:
      <>{`${LiveFeedElemnt.Vehicles[0].name} : ${LiveFeedElemnt.Vehicles[0].id}`}</> }</span></h2>
      
      {/* Conditionally rendering components based on LiveFeedAvailable */}
      {LiveFeedAvailable ? (
        <RealtimeTrackerChart />
      ) : (
        <div className="text-red-500">
          Live feed is not available at the moment.
        </div>
      )}

      {/* Button to toggle live feed availability */}
      <button onClick={(e)=>{toggleLiveFeed(e)}} className="mt-4 disabled px-4 py-2 bg-blue-500 text-white rounded-md">
        {LiveFeedAvailable ? "Disable Live Feed" : "Enable Live Feed"}
      </button>
    </div>
  );
};

export default Analytics;
