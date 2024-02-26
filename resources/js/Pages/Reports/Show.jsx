// resources/js/Pages/Reports/Show.jsx

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Link } from '@inertiajs/react';

const Show = ({ report, auth }) => {
  return (
    <div>
      {console.log(report)}

      <AuthenticatedLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Dashboard - {auth.user.role}
          </h2>
        }
      >
        <div className="max-w-2xl mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Report Details</h1>
          <div className="mb-4 text-gray-800 dark:text-gray-200">
            {/* Display report details */}
            <ul>
              <li>{`User ID: ${report.user_id}`}</li>
              <li>{`Application Status: ${report.application_status}`}</li>
              <li>{`Application Date: ${report.application_date}`}</li>
              <li>{`Job ID: ${report.job}`}</li>
              {/* Add other report details as needed */}
            </ul>
          </div>
          {/* Other fields */}
          <div className="space-x-2">
            <Link
              href={route('reports.edit', { report: report.id })}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
            >
              Edit
            </Link>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Show;
