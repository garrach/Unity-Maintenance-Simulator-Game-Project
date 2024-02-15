// resources/js/Pages/connections/Index.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

const Index = ({ connections,auth }) => {
  // Your component logic for index goes here

  return (
    <div className='dark:text-white'>        
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard - {auth.user.role}</h2>}
      >
      <h1>Connection List</h1>
      <ul>
        {connections.map(connection => (
          <li key={connection.id}>
            {connection.name}
            <div>
              {/* InertiaLink for navigating to show page */}
              <Link
                href={route('connections.show', { connection: connection.id })}
              >
                View
              </Link>
              {/* InertiaLink for navigating to edit page */}
              <Link
                href={route('connections.edit', { connection: connection.id })}
              >
                Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
      {/* InertiaLink for navigating to create page */}
      <Link href={route('connections.create')}>Create Connection</Link>
      </AuthenticatedLayout>
    </div>
  );
};

export default Index;
