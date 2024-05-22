
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head, Link } from '@inertiajs/react';

const Show = ({ service, auth }) => {
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
                        <Head title="Service Details" />

        <div className="max-w-2xl mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Service Details</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
              Name:
            </label>
            <p className="mt-1 p-2 border rounded-md w-full bg-gray-100 dark:bg-gray-700">
              {service.name}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
            description:
            </label>
            <p className="mt-1 p-2 border rounded-md w-full bg-gray-100 dark:bg-gray-700">
              {service.description}
            </p>
          </div>
          {auth.user.role==='admin'&&
          <div className="flex space-x-2">
         
                   
            <Link
              href={route('services.edit', { service: service.id })}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
            >
              Edit
            </Link>
          </div> }
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Show;
