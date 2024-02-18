// resources/js/Components/Dashboard/SystemStatus.jsx
import React, { useEffect, useState } from 'react';

const SystemStatus = ({ currentWebSocket }) => {
  const [webSocketLive,setwebSocketLive]=useState(null);
  const [message,setMessage]=useState(null);
  if(currentWebSocket)
  currentwebSocket(new WebSocket('ws://localhost:3004'));
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">System Status</h2>
      
    </div>
  );
};

export default SystemStatus;
