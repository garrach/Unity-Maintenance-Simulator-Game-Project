// resources/js/Pages/vehicles/Edit.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import React from 'react';

const Edit = ({ vehicle, auth }) => {
  // Your component logic for edit goes here

  return (
    <div className='dark:text-white'>
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard - {auth.user.role}</h2>}
        >
  <h1>Edit Connection</h1>
      </AuthenticatedLayout>
    </div>
  );
};

export default Edit;
