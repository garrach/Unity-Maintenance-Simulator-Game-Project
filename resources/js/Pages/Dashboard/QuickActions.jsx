// resources/js/Components/Dashboard/QuickActions.jsx
import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

const QuickActions = ({auth}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold  mb-2">Quick Actions</h2>
      <div className='mt-20'>
        {auth.user.role==='admin' && (
          <>
           <button className="bg-blue-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-blue-600">Add Vehicle</button>
      <button className="bg-blue-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-green-600">Create Plan</button>
      <button className="bg-green-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-green-600"><Link href='/connections'>Connections</Link></button>
     
          </>
        )

        }
      </div>
    </div>
  );
};

export default QuickActions;
