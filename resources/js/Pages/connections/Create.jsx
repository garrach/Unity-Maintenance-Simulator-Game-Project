// resources/js/Pages/vehicles/Create.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import React from 'react';

const Create = ({auth}) => {
  // Your component logic for create goes here

  return (
    <div className='dark:text-white'>
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard - {auth.user.role}</h2>}
        >
       <div>
      <h1>Create Connection</h1>
      {/* Your form for creating a new connection goes here */}
    </div>

      </AuthenticatedLayout>
    </div>
  );
};

export default Create;
