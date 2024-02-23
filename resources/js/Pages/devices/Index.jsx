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
        <div className="my-5">
          <h1 className="text-2xl font-semibold mb-4">Device List</h1>
          <ul className="space-y-2 grid grid-cols-3 gap-4 ">
            {devices.map((device, index) => (
              <li key={device.id} className={`bg-${index % 2 === 0 ? 'gray-100' : 'gray-200'} dark:bg-${index % 2 === 0 ? 'gray-800' : 'gray-700'} p-4 rounded-md shadow-md mb-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105`}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-semibold mb-1">{`Serial Number: ${device.serial_number}`}</p>
                    <p className="text-sm text-gray-500">{`Type: ${device.type}`}</p>
                    <p className="text-sm text-gray-500">{`Installation Date: ${device.installation_date}`}</p>
                  </div>
                  <div className="flex space-x-4">
                    <Link href={route('devices.show', { device: device.id })} className="text-blue-500 hover:underline">
                      View
                    </Link>
                    {auth.user.role === "admin" && ( <Link href={route('devices.edit', { device: device.id })} className="text-blue-500 hover:underline">
                      Edit
                    </Link>)}
                   
                  </div>
                </div>
              </li>

            ))}
          </ul>
          {auth.user.role === "admin" && (

            <Link
              href={route('devices.create')}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 inline-block"
            >
              Create Device
            </Link>
          )}

        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Index;
