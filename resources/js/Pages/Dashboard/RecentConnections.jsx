// resources/js/Components/Dashboard/RecentConnections.jsx
import { usePage } from '@inertiajs/react';
import React from 'react';
import { useRef } from 'react';
const RecentConnections = ({ connection, webSocket }) => {
  const { props } = usePage();
  const devices = useRef();
  const devicesArr = useRef([]);
  const users = useRef();
  const usersArr = useRef([]);


  devices.current = Object.entries(props.devices);
  devices.current.map(([key, element]) => {
    devicesArr.current.push(element);
  });
  users.current = Object.entries(props.users);
  users.current.map(([key, element]) => {
    usersArr.current.push(element);
  });
  sort
  return (
    <div className="p-2 dark:text-white text-gray-800">
      <h2 className="text-lg font-semibold mb-2" id='pop'>Recent Connections</h2>
      <div className='w-full overflow-x-hidden h-80 overflow-y-auto'>
        <table className='w-full'>
          {Object.values(props.Purchases).map((purchase, index) => (
            <tr className='uppercase p-4 hover:bg-gray-900 hover:text-gray-200 rounded shadow-md transition-transform transform hover:scale-105'>
              <td>
                <span><b>{`purchase (ID:${purchase.id}) `}</b></span>
              </td>
              <td>
                <span >{` user : ${usersArr.current[index].name} `}</span>
              </td>
              <td>
                <span> Device : <b><span className='underline decoration-sky-500' >{devicesArr.current[index].type}</span></b></span>
              </td>
              <td>
                <span>{` Date: ${purchase.date}`}</span>
              </td>
            </tr>

          )
          )}
        </table>
      </div>

    </div>
  );
};
export default RecentConnections;
