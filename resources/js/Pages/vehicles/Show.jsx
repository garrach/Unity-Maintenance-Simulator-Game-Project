// resources/js/Pages/vehicles/Show.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

const Show = ({ vehicle, auth }) => {
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
                                <Head title="Vehicle Details" />

        <div className="my-4">
          <h1 className="text-2xl font-semibold mb-4">Vehicle Details</h1>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
            <p className="text-lg font-semibold mb-2">Make: {vehicle.make}</p>
            <p className="text-lg font-semibold mb-2">Model: {vehicle.model}</p>
            <p className="text-lg mb-2">Year: {vehicle.year}</p>
            <p className="text-lg mb-2">License Plate: {vehicle.license_plate}</p>
            {/* Display other details as needed */}
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Show;
