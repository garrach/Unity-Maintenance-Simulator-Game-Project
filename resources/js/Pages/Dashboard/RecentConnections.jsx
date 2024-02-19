// resources/js/Components/Dashboard/RecentConnections.jsx
import React from 'react';

const RecentConnections = ({ connection }) => {
  const currentDate = new Date();

const currentDayOfMonth = setZero(currentDate.getDate()) 
const currentMonth = setZero( currentDate.getMonth()+1); 
const currentYear = setZero( currentDate.getFullYear());
const currenthour = setZero( currentDate.getHours());
const currentmin = setZero( currentDate.getMinutes());
const currentsec = setZero( currentDate.getSeconds());

function setZero(timer){
  if((timer)<10)
  return "0"+(timer);
  else
  return timer;
}

const dateString = currentDayOfMonth + "-" + (currentMonth) + "-" + currentYear + " " + currenthour + ":" + currentmin + ":" + currentsec;
  const connections=[{
    id:'0',
    timestamp:dateString,
    vehicle:{name:'DefaultCar'},
    device:{name:'Dash-cam'},
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
