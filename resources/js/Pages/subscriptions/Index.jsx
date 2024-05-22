import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useRef } from 'react';

const Index = ({ displaySubs, auth }) => {
  const { delete: destroy, post } = useForm();
  const [formData, setFormData] = useState({
    user_id: '',
    service_id: '',
    name: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post('/subservices/sub', formData);
    setFormData({
      user_id: '',
      service_id: '',
      name: '',
      description: '',
      price: ''
    });
  };
  const displaySubsRef = useRef(Object.values(displaySubs));
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Assign Subscriptions Plan</h2>}
    >
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="container mx-auto px-4 py-8 flex-grow">
          <h1 className="text-3xl font-semibold mb-8">Subagents List</h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col mb-4">
              <label htmlFor="user_id" className="text-sm font-semibold mb-1">User ID</label>
              <input
                type="text"
                id="user_id"
                name="user_id"
                value={formData.user_id}
                onChange={handleChange}
                className="rounded-md px-4 py-2 border dark:border-gray-600"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="service_id" className="text-sm font-semibold mb-1">Service ID</label>
              <input
                type="text"
                id="service_id"
                name="service_id"
                value={formData.service_id}
                onChange={handleChange}
                className="rounded-md px-4 py-2 border dark:border-gray-600"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-md px-4 py-2 border dark:border-gray-600"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="description" className="text-sm font-semibold mb-1">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="rounded-md px-4 py-2 border dark:border-gray-600"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="price" className="text-sm font-semibold mb-1">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="rounded-md px-4 py-2 border dark:border-gray-600"
              />
            </div>
            <button type="submit" className="btn btn-primary col-span-full">Create Assign Service</button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {displaySubsRef.current.map((item, index) => (
              <div key={index} className="bg-white rounded-md shadow-md overflow-hidden">
                <div className="p-4">
                  {item.user.name && <h2 className="text-lg font-semibold mb-2">User: {item.user.name}</h2>}
                  <ul>
                    {item.services && Object.values(item.services).map((service, index) => (
                      <li key={index} className="flex justify-between items-center py-2">
                         {console.log(service)}
                        <span>{service.name}</span>
                        <div>
                          <button onClick={() => destroy(`/subservices/${service.id}`)} className="btn btn-danger">Delete</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-4 py-2 bg-gray-100 border-t">
                  <Link href={`/subservices/${item.user.id}/edit`} className="btn btn-primary">Edit</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Index;
