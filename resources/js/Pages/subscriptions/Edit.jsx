import React from 'react';
import { useForm } from '@inertiajs/react';

const Edit = ({ subagent }) => {
  const { data, setData, post, errors } = useForm({
    name: subagent.name,
    description: subagent.description,
    // Add other fields here
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('subservices.sub'));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-semibold mb-4">Edit User</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md px-4 py-2 border focus:outline-none focus:border-blue-500"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
              />
              {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-semibold mb-1">Description</label>
              <input
                type="text"
                id="description"
                className="w-full rounded-md px-4 py-2 border focus:outline-none focus:border-blue-500"
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
              />
            </div>
            {/* Add other fields here */}
            <div className="flex justify-end">
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="button" className="btn btn-secondary ml-2" onClick={() => history.back()}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
