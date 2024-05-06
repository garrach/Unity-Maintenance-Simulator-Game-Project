import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';

const ReminderEdit = ({ reminder, user }) => {
  const [formData, setFormData] = useState({
    title: reminder.title,
    description: reminder.description,
    date: reminder.date,
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
    // Add logic to update the reminder using formData
  };

  return (
    <div>
      <AuthenticatedLayout user={user} header="Reminders">
        <div className="max-w-2xl mx-auto dark:bg-gray-800 p-4 mt-4">
          <h1 className="text-2xl font-semibold mb-4 dark:text-gray-200">Edit Reminder</h1>
          <form onSubmit={handleSubmit} className="space-y-4 p-4 dark:text-gray-900">
            <div>
              <label htmlFor="title" className="block dark:text-gray-300 text-sm font-medium text-gray-700">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="description" className="block dark:text-gray-300 text-sm font-medium text-gray-700">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm dark:text-gray-300 font-medium text-gray-700">
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Update Reminder
              </button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default ReminderEdit;
