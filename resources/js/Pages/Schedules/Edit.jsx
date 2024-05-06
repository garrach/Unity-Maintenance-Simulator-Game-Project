import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';

const ScheduleEdit = ({ schedule, user }) => {
  const [formData, setFormData] = useState({
    title: schedule.title,
    description: schedule.description,
    start_date: schedule.start_date,
    end_date: schedule.end_date,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update the schedule using formData
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
      <AuthenticatedLayout user={user} header="Schedules">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-2xl font-semibold mb-4 dark:text-white">Edit Schedule</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-white">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full dark:bg-gray-700"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-white">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full dark:bg-gray-700"
              />
            </div>
            <div>
              <label htmlFor="start_date" className="block text-sm font-medium text-gray-700 dark:text-white">
                Start Date:
              </label>
              <input
                type="date"
                id="start_date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full dark:bg-gray-700"
              />
            </div>
            <div>
              <label htmlFor="end_date" className="block text-sm font-medium text-gray-700 dark:text-white">
                End Date:
              </label>
              <input
                type="date"
                id="end_date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full dark:bg-gray-700"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Update Schedule
              </button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default ScheduleEdit;
