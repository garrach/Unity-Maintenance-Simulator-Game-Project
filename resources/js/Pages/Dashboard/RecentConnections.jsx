import React, { useEffect, useRef } from 'react';
import { usePage } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faLineChart } from '@fortawesome/free-solid-svg-icons';

const RecentConnections = ({ connection, webSocket }) => {
  const { props } = usePage();
  const devicesArr = useRef(Object.values(props.devices) || []);
  const usersArr = useRef(Object.values(props.users) || []);
  const sortArray = useRef(Object.values(props.Purchases) || []);

  useEffect(() => {
    sortArray.current.reverse();
    devicesArr.current.reverse();
    usersArr.current.reverse();
  }, []);

  return (
    <div className="p-4 dark:text-white text-gray-800">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <FontAwesomeIcon icon={faLineChart} className="mr-2" />
        Recent Connections
      </h2>
      <div className='w-full overflow-x-hidden overflow-y-auto'>
        <table className='w-full'>
          <thead>
            <tr className="bg-gray-800 dark:bg-gray-900 text-white">
              <th className='p-3 text-left'>Linked</th>
              <th className='p-3 text-left'>User</th>
              <th className='p-3 text-left'>Device</th>
              <th className='p-3 text-left'>Date Link</th>
            </tr>
          </thead>
          <tbody>
            {sortArray.current.map((purchase, index) => (
              <tr key={index} className='dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-200 transition-colors'>
                <td className="p-4">
                  <FontAwesomeIcon icon={faLink} className="text-blue-500" />
                </td>
                <td className="p-4">
                  <span>{`User: ${usersArr.current[index]?.name || ''}`}</span>
                </td>
                <td className="p-4">
                  <span>{`Device: ${devicesArr.current[index]?.type || ''}`}</span>
                </td>
                <td className="p-4">
                  <span>{`Date: ${purchase.date}`}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentConnections;
