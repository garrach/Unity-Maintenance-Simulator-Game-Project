// resources/js/Pages/Profile/Services/Create.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

const Create = ({ auth }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    description: '',
    route: '',
    // Add other fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('services.store'));
  };

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
          <h1 className="text-2xl font-semibold mb-4">Create Service</h1>
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
                className="mt-1 p-2 border rounded-md dark:text-gray-800 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
              description:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={data.description}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md dark:text-gray-800 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                route:
              </label>
              <input
                type="text"
                id="route"
                name="route"
                value={data.route}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md dark:text-gray-800 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
                disabled={processing}
              >
                {processing ? 'Creating...' : 'Create Service'}
              </button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Create;
