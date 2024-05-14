// resources/js/Pages/paymentPlans/Edit.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';

const Edit = ({ paymentPlan, auth }) => {
  const [formData, setFormData] = useState({
    name: paymentPlan.name,
    // Include other fields as needed
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your update logic here
    // You might want to make an API request to update the payment plan details
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
                <Head title="Plan Details" />

        <div className="my-4">
          <h1 className="text-2xl font-semibold mb-4">Edit Payment Plan</h1>
          <form onSubmit={handleSubmit}>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
              <label className="block text-lg font-semibold mb-2">Name:</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-gray-300 p-2 rounded-md w-full dark:text-gray-900"
              />
              {/* Include other form fields for editing other details */}
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Edit;
