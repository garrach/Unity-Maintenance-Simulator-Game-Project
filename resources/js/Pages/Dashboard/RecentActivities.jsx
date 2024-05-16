// resources/js/Components/Dashboard/RecentActivities.jsx
import React, { useEffect, useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { clientSocket } from '../client.cjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream } from '@fortawesome/free-solid-svg-icons';
const RecentActivities = ({ activities, display }) => {
  const [acts, setActs] = useState([null]);
  const [webSocketLive, setwebSocketLive] = useState(null);
  const [message, setMessage] = useState('(N/A)');
  const { props } = usePage();

  useEffect(() => {
    setActs((prevActs) => [...prevActs, display.message.message]);
  }, [display.message])
  useEffect(() => {
    if (display.currentwebSocket) {
      setwebSocketLive(display.currentwebSocket);
      if (props.auth.user.role === "admin")
        display.currentwebSocket.send(JSON.stringify({ type: "webClientIdentity", message: "This Is Admin Panel Message", data: props.auth.user.email }))
    }
  }, [display.currentwebSocket])
  return (
    <div className=" dark:text-white text-gray-800 h-56 overflow-y-auto p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2" id='pop'>
        <FontAwesomeIcon icon={faStream} />
        <span className='ml-2'>Recent Activities</span>

        </h2>
      {/*display.message.message &&(<h2 className="text-lg font-semibold mb-2">{display.message.message}</h2>)*/}
      <ul>
        {webSocketLive && display.message.data && <li>Client ON :{display.message.data.ID}</li>}
        <li><strong>Users Feed:</strong> </li>
        {acts.map((conn, index) => (
          <li key={index}>{conn}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
