// resources/js/Components/Dashboard/SystemStatus.jsx
import React, { useEffect, useState } from 'react';

const SystemStatus = ({ currentWebSocket }) => {
  const [webSocketLive,setwebSocketLive]=useState(null);
  const [message,setMessage]=useState(null);
  if(currentWebSocket)
  currentwebSocket(new WebSocket('ws://localhost:3004'));

  /*navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  .then((stream) => {
    // Use the stream for audio/video communication
  })
  .catch((error) => {
    console.error('Error accessing user media:', error);
  });*/

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">System Status</h2>
      
    </div>
  );
};

export default SystemStatus;
