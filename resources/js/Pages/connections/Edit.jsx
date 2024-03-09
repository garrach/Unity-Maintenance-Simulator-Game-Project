// resources/js/Pages/Connections/Edit.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';

const Edit = ({ connection, auth }) => {
  const { data, setData, put, processing, errors, reset } = useForm({
    name: 'connection.name',
    
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
    put(route('connections.update', { connection: connection.id }));
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
        <div className='dark:text-white'>
          <h1>Edit Connection</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            {/* Add other form fields as needed */}
            <div>
              <button type="submit">Update Connection</button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Edit;
