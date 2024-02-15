// resources/js/Pages/vehicles/Show.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import React from 'react';

const Show = ({ vehicle ,auth }) => {
  // Your component logic for show goes here

  return (
    <div className='dark:text-white'>
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard - {auth.user.role}</h2>}
        >
     <h1>Connection Details</h1>
      {/* Display detailed information about the specific connection */}
      <p>Name: {connection.name}</p>
      {/* ... other details */}
      </AuthenticatedLayout>
    </div>
  );
};

export default Show;
