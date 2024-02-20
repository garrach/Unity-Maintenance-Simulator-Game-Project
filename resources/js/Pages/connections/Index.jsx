// resources/js/Pages/Connections/Index.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Link } from '@inertiajs/react';

const Index = ({ connections, vehicles, devices, auth }) => {
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
              {vehicles && vehicles.map((vehicle, index) => (<>
                <li className='text-2xl font-bold uppercase'>{vehicle.make}</li>
                <li className='font-bold uppercase'>Devices:</li>
                <li key={index}
                  className='p-4 text-gray-900 rounded-md shadow-md'
                >{
                    vehicle.devices && vehicle.devices.map((device, index) => (
                      <>
                        <ol>
                          <li key={index}>{device.serial_number}</li>
                        </ol>
                      </>
                    ))

                  }
                </li>


                <li>
                  <div className="flex space-x-2">
                    <Link
                      href={route('connections.show', { connection: connections[index].id })}
                      className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-blue-600 mt-4 mb-4 inline-block"
                    >
                      View
                    </Link>
                    
                    <Link
                      href={route('connections.edit', { connection: connections[index].id })}
                      className="bg-gray-800 text-white px-4 py-1 rounded hover:bg-blue-600 mt-4 mb-4 inline-block"
                      >
                      Edit
                    </Link>
                  </div>
                </li>
              </>))}
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
