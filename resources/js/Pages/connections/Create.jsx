// resources/js/Pages/Connections/Create.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';

const Create = ({ auth }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    // Add other fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('connections.store'));
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
        <div className="max-w-2xl mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Create Connection</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-white"
              />
              {/* Add other form fields as needed */}
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
              >
                Create Connection
              </button>
              <Link
                href={route('connections.index')}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 focus:outline-none"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Create;
