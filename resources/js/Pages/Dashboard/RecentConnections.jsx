// resources/js/Components/Dashboard/RecentConnections.jsx
import { usePage } from '@inertiajs/react';
import React from 'react';
import { useEffect } from 'react';
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
  const sortArray = useRef(props.Purchases);
  const sortArraydevicesArr = useRef(devicesArr.current);
  const sortArrayusersArr = useRef( usersArr.current);
  useEffect(() => {

    sortArray.current = Object.values(sortArray.current);
    sortArray.current = sortArray.current.map((value, index, arr) => arr[arr.length - index - 1]);

    sortArraydevicesArr.current = Object.values(sortArraydevicesArr.current);
    sortArraydevicesArr.current = sortArraydevicesArr.current.map((value, index, arr) => arr[arr.length - index - 1]);

    sortArrayusersArr.current = Object.values(sortArrayusersArr.current);
    sortArrayusersArr.current = sortArrayusersArr.current.map((value, index, arr) => arr[arr.length - index - 1]);

  }, [])

  return (
    <div className="p-2 dark:text-white text-gray-800">
      <h2 className="text-lg font-semibold mb-2" id='pop'>Recent Connections</h2>
      <div className='w-full overflow-x-hidden h-80 overflow-y-auto'>
        <table className='w-full'>
          {sortArray.current.map((purchase, index) => (
            <tr className='uppercase p-4 hover:bg-gray-900 hover:text-gray-200 rounded shadow-md transition-transform transform hover:scale-105'>
              <td>
                <span className='w-10 relative h-10'>...</span>
              </td>
              <td>
                <span >{` user : ${usersArr.current[usersArr.current.length - index - 1].name} `}</span>
              </td>
              <td>
                <span> Device : <b><span className='underline decoration-sky-500' >{devicesArr.current[devicesArr.current.length - index - 1].type}</span></b></span>
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
