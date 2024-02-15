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
          <h1 className="text-2xl font-semibold mb-4">Connection List</h1>
          <ul className="space-y-2">
            {connections.map((connection) => (
              <li key={connection.id} className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                <p className="text-lg font-semibold mb-2">{connection.name}

                </p>
                <ul>
                  <li>{connection.vehicle.make}</li>
                  <ul>
                    {connection.devices.map((device) => (
                      <li key={device.id}>{device.type}</li>
                    ))}
                  </ul>
                </ul>

                <div className="flex space-x-2">
                  <Link
                    href={route('connections.show', { connection: connection.id })}
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </Link>
                  <Link
                    href={route('connections.edit', { connection: connection.id })}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href={route('connections.create')}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mt-4 inline-block"
          >
            Create Connection
          </Link>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Index;
