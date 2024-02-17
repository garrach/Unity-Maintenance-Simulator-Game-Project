// resources/js/Pages/connections/Create.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';

const Create = ({ auth, vehicles, devices, connections }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    // Your form fields here
    vehicle_id: '',
    device_id: '',
    connection_date: '',
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Create Connection</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Your form fields here */}
            <div>
              <label htmlFor="vehicle_id" className="block text-sm font-medium text-gray-700">
                Vehicle:
              </label>
              <select
                id="vehicle_id"
                name="vehicle_id"
                value={data.vehicle_id}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              >
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.make}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="device_id" className="block text-sm font-medium text-gray-700">
                Device:
              </label>
              <select
                id="device_id"
                name="device_id"
                value={data.device_id}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              >
                {devices.map((device) => (
                  <option key={device.id} value={device.id}>
                    {device.serial_number}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="connection_date" className="block text-sm font-medium text-gray-700">
                Connection Date:
              </label>
              <input
                type="date"
                id="connection_date"
                name="connection_date"
                defaultValue='2024-02-15'
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Create Connection
              </button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Create;
