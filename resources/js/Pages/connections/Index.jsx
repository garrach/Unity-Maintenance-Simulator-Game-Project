// resources/js/Pages/Connections/Index.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';

const Index = ({ connections, vehicles, devices, auth }) => {
  const { props } = usePage();
  const pageData = usePage();
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(true);
  const connectionRef = useRef();
  const deviceRef = useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    connection: connectionRef.current,
    device: deviceRef.current,
  });


  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };


  const deleteUser = (e, connection, device) => {
    e.preventDefault();
    connectionRef.current = connection;
    deviceRef.current = device;
    destroy(route('connections.destroy', { connection: connection, device: device }), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onFinish: () => reset(),
    });
  };

  const closeModal = () => {
    setConfirmingUserDeletion(false);

    reset();
  };


  return (
    <div>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Dashboard - {auth.user.role}
          </h2>
        }
      >
        <div className="my-4 max-w-7xl mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h1 className="text-3xl font-semibold mb-4">Connection List</h1>
          <ul className="space-y-2">
            <ul>
              <li>


                {vehicles && vehicles.map((vehicle, index1) => (
                  <ul key={index1}>
                    <li className='text-2xl font-bold uppercase'>{vehicle.make}</li>
                    <li className='font-bold uppercase'>Devices:</li>
                    <li key={index1}
                      className='p-4 text-gray-900 rounded-md shadow-md'
                    >{
                        vehicle.devices && vehicle.devices.map((device, index) => (

                          <form onSubmit={(e) => { e.preventDefault(); deleteUser(e, connections[index1].id, device.id); }} key={index}>
                            <ol className='flex'>
                              <li title={connections[index1].id}>{device.serial_number}
                              </li>
                              <button className="bg-red-500 ml-56 uppercase text-white px-4 py-1 rounded hover:bg-blue-600 ">
                                delete
                              </button>
                            </ol>
                          </form>

                        ))

                      }
                    </li>


                    <li>
                      <div className="flex space-x-2">
                        <Link
                          href={route('connections.show', { connection: connections[index1].id })}
                          className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-blue-600 mt-4 mb-4 inline-block"
                        >
                          View
                        </Link>
                      </div>
                    </li>
                  </ul>))}


              </li>

            </ul>
          </ul>


          <Link
            href={route('connections.create')}
            className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-blue-600 mt-4 inline-block"
          >
            Create Connection
          </Link>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Index;
