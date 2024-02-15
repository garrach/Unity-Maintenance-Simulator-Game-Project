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
          <h1 className="text-2xl font-semibold mb-4">Services</h1>
          <ul className="space-y-2 grid grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <li key={service.id} className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md cursor-pointer hover:text-white hover:bg-cyan-300">
                <p className="text-lg font-semibold mb-2">{service.name}</p>
                <div className="flex space-x-2">
                  <Link
                    href={route('services.show', { service: service.id })}
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </Link>
                  <Link
                    href={route('services.edit', { service: service.id })}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href={route('services.create')}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mt-4 inline-block"
          >
            Create Service
          </Link>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Index;
