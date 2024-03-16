// resources/js/Pages/AssetBundles/Create.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';

const Create = ({ auth }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    description: '',
    version: '',
    platform: '',
    file_size: '',
    file_path: '',
    device_ids: [], 
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
    post(route('assetBundles.store'));
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
        <div>
          <h1>Create AssetBundle</h1>
          <form onSubmit={handleSubmit}>
            {/* Form fields for AssetBundle */}
            {/* ... */}
            <div>
              <button type="submit">Create AssetBundle</button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Create;
