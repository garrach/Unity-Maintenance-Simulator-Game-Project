// resources/js/Components/Dashboard/RecentConnections.jsx
import { usePage } from '@inertiajs/react';
import React from 'react';
import { useRef } from 'react';
const RecentConnections = ({ connection, webSocket }) => {
  const { props } = usePage();
  const devices=useRef();
  const devicesArr=useRef([]);


  devices.current=Object.entries(props.devices);
  devices.current.map(([key,element]) => {
    devicesArr.current.push(element);
  });
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Recent Connections</h2>
      <ul>
       {Object.values(props.Purchases).map((purchase,index)=>(
        <li key={index} className='uppercase p-4 hover:bg-gray-900 rounded-md shadow-md transition-transform transform hover:scale-105'>
          {`
          purchase ID:${purchase.id} 
          user ID:${purchase.user_id} 
          Device :${devicesArr.current[index].type} 
          Date:${purchase.date}`}
          </li>
       )
       )}
        
      </ul>
    </div>
  );
};
export default RecentConnections;
