// resources/js/Pages/devices/Create.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { format } from 'date-fns';

const Create = ({ auth }) => {
  const { data, setData, post, processing } = useForm({
    serial_number:'',
    type:'',
    installation_date: format(new Date(), 'yyyy-MM-dd'),
    image:"",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('devices.store'));
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
        <div className="my-4 mx-auto container w-80">
          <h1 className="text-2xl font-semibold mb-4 ">Create Device</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="serial_number" className="block text-sm dark:text-gray-200 font-medium text-gray-600">
              Serial Number:
              </label>
              <input
                type="text"
                id="serial_number"
                name="serial_number"
                value={data.serial_number}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm dark:text-gray-200 font-medium text-gray-600">
              Type:
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={data.type}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-sm dark:text-gray-200 font-medium text-gray-600">
              Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 p-2 border rounded-md w-full dark:text-gray-800"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mt-6 rounded-full hover:bg-blue-600"
                disabled={processing}
              >
                {processing ? 'Creating...' : 'Create Device'}
              </button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Create;
