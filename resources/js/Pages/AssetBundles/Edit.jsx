// resources/js/Pages/AssetBundles/Edit.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const Edit = ({ assetBundle, auth }) => {
  const { data, setData, put, processing, errors } = useForm({
    name: assetBundle.name,
    description: assetBundle.description,
    version: assetBundle.version,
    platform: assetBundle.platform,
    file_size: assetBundle.file_size,
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
    put(route('assetBundles.update', { assetBundle: assetBundle.id }));
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
        <div className="my-4">
          <h1 className="text-2xl font-semibold mb-4">Edit AssetBundle</h1>
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
            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={data.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="version">Version:</label>
              <input
                type="text"
                id="version"
                name="version"
                value={data.version}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="platform">Platform:</label>
              <input
                type="text"
                id="platform"
                name="platform"
                value={data.platform}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="file_size">File Size:</label>
              <input
                type="text"
                id="file_size"
                name="file_size"
                value={data.file_size}
                onChange={handleChange}
              />
            </div>
            {/* Add other form fields as needed */}
            <div>
              <button type="submit">Update AssetBundle</button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Edit;
