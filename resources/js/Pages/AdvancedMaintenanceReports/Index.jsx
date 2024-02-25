import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DefaultPlan from '../defaultPlan';

const AdvancedMaintenanceReportsIndex = ({ auth }) => {
  const [formData, setFormData] = useState({
    reportType: '',
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Advanced Maintenance Reports Page</h2>}
      >
        <Head title="Advanced Maintenance Reports Page" />
        <div className="my-4 p-6 bg-white dark:bg-gray-800  rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-4 dark:text-gray-200">Welcome to the Advanced Maintenance Reports Page</h1>
          <p className="text-gray-600 dark:text-gray-300">
            This page provides advanced reports and analytics for your maintenance data.
          </p>

          {/* Form for Advanced Reports */}
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Report Type */}
              <div>
                <label htmlFor="reportType" className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                  Report Type
                </label>
                <input
                  type="text"
                  id="reportType"
                  name="reportType"
                  value={formData.reportType}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              {/* Start Date */}
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-600 dark:text-gray-100">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              {/* End Date */}
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-600 dark:text-gray-100">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Generate Report
            </button>
          </form>

          {/* Display Advanced Reports */}
          <div className="mt-8 dark:text-gray-200">
            <DefaultPlan param={auth} />
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default AdvancedMaintenanceReportsIndex;
