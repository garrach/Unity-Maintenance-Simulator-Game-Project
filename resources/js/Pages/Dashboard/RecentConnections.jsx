// resources/js/Components/Dashboard/RecentConnections.jsx
import { usePage } from '@inertiajs/react';
import React from 'react';

const RecentConnections = ({ connection }) => {
  const currentDate = new Date();
  const {props}=usePage();

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
const timestamp=dateString;

/*  const connections=[{
    id:'0',
    timestamp:dateString,
    vehicle:{name:'DefaultCar'},
    device:{name:'Dash-cam'},
  }]*/
  let vh=-1;
  let dv=-1;
  let conn=-1;
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
        {(
          <li>
            <p>Vehicle: {props.vehicles[vh-2].make}</p>
            <p>Device: {props.devices[0][dv-2].type}</p>
            <p>Timestamp: {timestamp}</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RecentConnections;
