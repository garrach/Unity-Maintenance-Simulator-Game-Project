// resources/js/Components/Dashboard/VehicleList.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
const VehicleList = ({ vehicle }) => {
  const vehicles = [{
    id: '',
    name: 'Toyota cammy Default',
    model: 'Toyota',
    year: '',
  }]
  return (
    <div className="dark:text-white text-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2" id='pop'>
        <FontAwesomeIcon icon={faCar} />
        <span className='ml-2'>Vehicle List</span>
      </h2>
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
