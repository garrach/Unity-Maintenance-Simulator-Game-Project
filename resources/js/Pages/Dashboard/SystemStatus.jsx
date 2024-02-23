// resources/js/Components/Dashboard/SystemStatus.jsx
import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';

const SystemStatus = ({ currentWebSocket }) => {
  const [webSocketLive,setwebSocketLive]=useState(null);
  const [message,setMessage]=useState(null);
  const [sys,setSys]=useState(false);
  const {props} = usePage();
  const socket=new WebSocket(props.someSocket);

  /*navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  .then((stream) => {
    // Use the stream for audio/video communication
  })
  .catch((error) => {
    console.error('Error accessing user media:', error);
  });*/

  useEffect(()=>{
    if(socket)
    socket.addEventListener('message',(evnt)=>{
      setMessage(JSON.parse(evnt.data))
      setSys(true)
    })
  },[message])
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">System Status</h2>

      {(message && sys) ? (<>
      
        <>{props.someSocket !=='' ? (<>
      
      <h1>Server Running.. {message.message}</h1>
      </>):(<>
      
       
      <h1>Server Down..</h1>

      </>)}</>

      </>):(<>
      
        <h1>Server Down..</h1>
      
      </>)}

      
    </div>
  );
};

export default SystemStatus;
