// resources/js/Components/Dashboard/DeviceList.jsx
import React from 'react';

const DeviceList = ({ devices }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Device List</h2>
      <ul>
        {devices.map((device) => (
          <li key={device.id}>
            <p>Name: {device.name}</p>
            <p>Type: {device.type}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceList;
