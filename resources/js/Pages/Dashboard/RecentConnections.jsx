// resources/js/Components/Dashboard/RecentConnections.jsx
import { usePage } from '@inertiajs/react';
import React from 'react';
const RecentConnections = ({ connection, webSocket }) => {
  const currentDate = new Date();
  const { props } = usePage();
  const prop = usePage();
  const currentDayOfMonth = setZero(currentDate.getDate())
  const currentMonth = setZero(currentDate.getMonth() + 1);
  const currentYear = setZero(currentDate.getFullYear());
  const currenthour = setZero(currentDate.getHours());
  const currentmin = setZero(currentDate.getMinutes());
  const currentsec = setZero(currentDate.getSeconds());
  function setZero(timer) {
    if ((timer) < 10)
      return "0" + (timer);
    else
      return timer;
  }
  const dateString = currentDayOfMonth + "-" + (currentMonth) + "-" + currentYear + " " + currenthour + ":" + currentmin + ":" + currentsec;
  const timestamp = dateString;
  /*  const connections=[{
      id:'0',
      timestamp:dateString,
      vehicle:{name:'DefaultCar'},
      device:{name:'Dash-cam'},
    }]*/
  let vh = 0;
  let dv = 0;
  let conn = 0;
  props.vehicles.forEach(element => {
    vh++;
  });
  props.devices.forEach(element => {
    dv++;
  });
  props.connections.forEach(element => {
    conn++;
  });
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Recent Connections</h2>
      <ul>
       {Object.values(props.Purchases).map((purchase,index)=>(
        <li key={index} className='uppercase p-4 hover:bg-gray-900 rounded-md shadow-md transition-transform transform hover:scale-105'>{`purchase ID:${purchase.id} user ID:${purchase.user_id} Device ID:${purchase.device_id} Date:${purchase.date}`}</li>
       )
       )}
        
      </ul>
    </div>
  );
};
export default RecentConnections;
