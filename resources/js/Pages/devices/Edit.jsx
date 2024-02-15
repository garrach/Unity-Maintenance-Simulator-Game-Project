// resources/js/Pages/devices/Edit.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const Edit = ({ device, auth }) => {
  const { data, setData, put, processing } = useForm({
    serial_number: device.serial_number,
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
    put(route('devices.update', { device: device.id }));
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
        <div className="my-4">
          <h1 className="text-2xl font-semibold mb-4">Edit Device</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="serial_number" className="block text-sm font-medium text-gray-600">
                Device Name:
              </label>
              <input
                type="text"
                required
                id="serial_number"
                name="serial_number"
                value={data.serial_number}
                placeholder={device.serial_number}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            {/* Add other form fields as needed */}
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                disabled={processing}
              >
                {processing ? 'Updating...' : 'Update Device'}
              </button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Edit;
