// resources/js/Pages/Connections/Show.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Link } from '@inertiajs/react';

const Show = ({ connection, auth }) => {
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
        <div className="max-w-2xl mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Connection Details</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
              Name:
            </label>
            <p className="mt-1 p-2 border rounded-md w-full bg-gray-100 dark:bg-gray-700">
              {connection.name}
            </p>
          </div>
          {/* Add other fields as needed */}
          <div className="flex space-x-2">
            <Link
              href={route('connections.edit', { connection: connection.id })}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
            >
              Edit
            </Link>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Show;
