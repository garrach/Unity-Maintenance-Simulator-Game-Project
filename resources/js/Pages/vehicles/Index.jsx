import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const Index = ({ vehicles, auth }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter vehicles based on search query
  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard - {auth.user.role}</h2>}
      >
        <div className="max-w-8xl mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h1 className="text-3xl font-semibold mb-2 md:mb-0">Vehicle List</h1>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <Link
                href={route('vehicles.create')}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add New Vehicle
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVehicles.map(vehicle => (
              <div key={vehicle.id} className="bg-white dark:bg-gray-700 p-4 rounded-md shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-400">
                      <span className="text-gray-600 dark:text-gray-800">V</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">{vehicle.make} {vehicle.model}</h2>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      href={route('vehicles.show', { vehicle: vehicle.id })}
                      className="text-blue-500 hover:underline"
                    >
                      View
                    </Link>
                    <Link
                      href={route('vehicles.edit', { vehicle: vehicle.id })}
                      className="text-yellow-500 hover:underline"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
                {/* Additional vehicle details if needed */}
              </div>
            ))}
          </div>
          
          {auth.user.role === 'admin' && (
            <div className="mt-8">
              <p className="text-green-500">Admin-specific content</p>
            </div>
          )}
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Index;
