// resources/js/Pages/devices/Index.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Link } from '@inertiajs/react';

const Index = ({ devices, auth }) => {
  return (
    <div className='dark:text-white'>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Dashboard - {auth.user.role}
          </h2>
        }
      >
        <div className="my-4">
          <h1 className="text-2xl font-semibold mb-4">Device List</h1>
          <ul className="space-y-2">
            {devices.map((device) => (
              <li key={device.id} className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
            <p className="text-lg font-semibold mb-2">{`serial_number: ${device.serial_number} type: ${device.type} installation_date: ${device.installation_date}`}</p>
                <div className="flex space-x-2">
                  <Link
                    href={route('devices.show', { device: device.id })}
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </Link>
                  <Link
                    href={route('devices.edit', { device: device.id })}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href={route('devices.create')}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mt-4 inline-block"
          >
            Create Device
          </Link>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Index;
