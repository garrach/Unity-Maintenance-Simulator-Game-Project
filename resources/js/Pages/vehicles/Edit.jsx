// resources/js/Pages/vehicles/Edit.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';

const Edit = ({ vehicle, auth }) => {
  const { data, setData, put, processing } = useForm({
    make: vehicle.make,
    model: vehicle.model,
    year: vehicle.year,
    license_plate: vehicle.license_plate,
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
    put(route('vehicles.update', { vehicle: vehicle.id }));
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
                                <Head title="Vehicle Details" />

        <div className="my-4">
          <h1 className="text-2xl font-semibold mb-4">Edit Vehicle</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="make" className="block text-sm font-medium text-gray-600">
                Make:
              </label>
              <input
                type="text"
                id="make"
                name="make"
                value={data.make}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-600">
                Model:
              </label>
              <input
                type="text"
                id="model"
                name="model"
                value={data.model}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-600">
                Year:
              </label>
              <input
                type="number"
                id="year"
                name="year"
                value={data.year}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="license_plate" className="block text-sm font-medium text-gray-600">
                License Plate:
              </label>
              <input
                type="text"
                id="license_plate"
                name="license_plate"
                value={data.license_plate}
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
                {processing ? 'Updating...' : 'Update Vehicle'}
              </button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Edit;
