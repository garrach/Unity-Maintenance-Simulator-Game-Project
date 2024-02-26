// resources/js/Pages/Profile/Services/Index.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Link } from '@inertiajs/react';

const Index = ({ services, auth }) => {
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
        <div className="my-4 max-w-5xl mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Services</h1>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={route('services.show', { service: service.id })} className="block bg-white dark:bg-gray-800 p-6 rounded-md shadow-md cursor-pointer hover:shadow-lg transition duration-300">
                  <h2 className="text-xl font-semibold mb-4">{service.name}</h2>
                  <div className="flex space-x-4">
                    <span className="text-blue-500 hover:underline cursor-pointer">
                      View
                    </span>
                    {auth.user.role==='admin'&&
                    <span className="text-blue-500 hover:underline cursor-pointer">
                      Edit
                    </span>}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {auth.user.role==='admin'&&
          <Link
            href={route('services.create')}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 mt-8 inline-block"
          >
            Create Service
          </Link>}
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Index;
