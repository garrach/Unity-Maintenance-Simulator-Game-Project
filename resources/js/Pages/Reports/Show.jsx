// resources/js/Pages/Reports/Show.jsx

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Link } from '@inertiajs/react';
import { PDFViewer } from '@react-pdf/renderer';
import ReportPDF from '../ReportPDF';
import { useState } from 'react';
import { useEffect } from 'react';
const Show = ({ report, RepUser, auth }) => {

  const [printReport, setPrintReport] = useState(false);
  const [data, setData] = useState({ rep: '', user: '' });
  const PrintReport = (id) => {
    setPrintReport(!printReport);
  };

  useEffect(() => {
    setData({ rep: report, user: RepUser })
  }, [])
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
        {console.log(RepUser)}
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

          <div className="space-x-2 relative">
            <Link
              href={route('reports.edit', { report: report.id })}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
            >
              Edit
            </Link>

           { (auth.user.role=="admin" || auth.user.role=="employee") && <button className="bg-red-500 text-white px-4 py-1 absolute right-0 rounded hover:bg-red-600"
              onClick={(e) => { e.preventDefault(); PrintReport(report.id) }}
            >
              Print
            </button>}
          </div>
        </div>
        {printReport && <PDFViewer width={window.innerWidth - 20} height={window.innerHeight}>
          <ReportPDF data={data} />
        </PDFViewer>}
      </AuthenticatedLayout>

    </div>
  );
};

export default Show;
