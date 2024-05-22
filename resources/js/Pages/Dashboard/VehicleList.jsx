// resources/js/Components/Dashboard/VehicleList.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { usePage } from '@inertiajs/react';
const VehicleList = ({ auth }) => {
  const { props } = usePage();

  return (
    <div className="dark:text-white text-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2" id='pop'>
        <FontAwesomeIcon icon={faCar} />
        <span className='ml-2'>Lastest Vehicle Maintainance</span>
      </h2>
      <ul>
        {props.vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            <p>Name: {vehicle.make}</p>
            <p>Model: {vehicle.model}</p>
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
