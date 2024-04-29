import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

const Index = ({ reports, auth, that }) => {
  const { props } = usePage();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    password: '',
  });

  const deleteReport = (id) => {
    if (confirm('Are you sure you want to delete this report?')) {
      destroy(route('reports.destroy', { report: id }));
    }
  };


  return (
    <div>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Dashboard - {auth.user.role}
          </h2>
        }
      >
        <div className="my-4 max-w-7xl mx-auto mt-6 p-6 bg-gray-900 dark:bg-gray-800 rounded-md shadow-md">
          <h1 className="text-3xl font-semibold mb-4 text-white dark:text-gray-200">Report List</h1>
          <ul className="space-y-4">
            {reports &&
              reports.map((report) => (
                <li key={report.id} className="border rounded-md shadow-md p-4 bg-gray-800 dark:bg-gray-700">
                  <h2 className="text-xl font-semibold text-white dark:text-gray-200">{report.title}</h2>
                  <p className="text-gray-400 dark:text-gray-400">{report.description}</p>
                  <p className="text-gray-400 dark:text-gray-400">Report Date: {report.application_date}</p>
                  <div className="flex mt-2 relative">
                    <Link
                      href={route('reports.show', { report: report.id })}
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 mr-2"
                    >
                      View
                    </Link>
                    <Link
                      href={route('reports.edit', { report: report.id })}
                      className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                      onClick={(e) => { e.preventDefault(); deleteReport(report.id) }}
                    >
                      Delete
                    </button>

                    
                  </div>
                </li>
              ))}
          </ul>
          <Link
            href={route('reports.create')}
            className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-blue-600 mt-4 inline-block"
          >
            Create Report
          </Link>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Index;
