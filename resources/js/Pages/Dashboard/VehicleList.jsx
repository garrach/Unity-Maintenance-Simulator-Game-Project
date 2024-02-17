// resources/js/Components/Dashboard/VehicleList.jsx
import React from 'react';

const VehicleList = ({ vehicle }) => {
  const vehicles=[{
    id:'',
    name:'',
    model:'',
    year:'',
  }]
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Vehicle List</h2>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            <p>Name: {vehicle.name}</p>
            <p>Model: {vehicle.model}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
