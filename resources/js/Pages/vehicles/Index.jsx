// resources/js/Pages/vehicles/Index.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Link } from '@inertiajs/react';

const Index = ({ vehicles, auth }) => {
  return (
    <div className='dark:text-white' >
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard - {auth.user.role}</h2>}
      >
        <div style={{maxWidth:'50rem'}}>
        <div className="my-4">
          <h1 className="text-2xl font-semibold mb-4">Vehicle List</h1>
          <ul className="space-y-2">
            {vehicles.map(vehicle => (
              <li key={vehicle.id} className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                <div>
                  <p className="text-lg font-semibold">{vehicle.make} {vehicle.model}</p>
                </div>
                <div className="flex space-x-4">
                  {/* InertiaLink for navigating to show page */}
                  <Link
                    href={route('vehicles.show', { vehicle: vehicle.id })}
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </Link>
                  {/* InertiaLink for navigating to edit page */}
                  <Link
                    href={route('vehicles.edit', { vehicle: vehicle.id })}
                    className="text-yellow-500 hover:underline"
                  >
                    Edit
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* InertiaLink for navigating to create page */}
        <Link href={route('vehicles.create')} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mt-4 inline-block">
          Create Vehicle
        </Link>

        {/* Example: Conditional rendering based on user role */}
        {auth.user.role === 'admin' && (
          <div className="mt-4">
            {/* Additional actions for admin users */}
            <p className="text-green-500">Admin-specific content</p>
          </div>
        )}
        </div>
        
      </AuthenticatedLayout>
    </div>
  );
};

export default Index;
