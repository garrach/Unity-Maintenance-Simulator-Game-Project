// resources/js/Components/Dashboard/RecentConnections.jsx
import React from 'react';

const RecentConnections = ({ connection }) => {
  const connections=[{
    id:'',
    timestamp:'',
    vehicle:{name:''},
    device:{name:''},
  }]
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Recent Connections</h2>
      <ul>
        {connections.map((connection) => (
          <li key={connection.id}>
            <p>Vehicle: {connection.vehicle.name}</p>
            <p>Device: {connection.device.name}</p>
            <p>Timestamp: {connection.timestamp}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentConnections;
