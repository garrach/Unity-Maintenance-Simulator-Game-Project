import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';

const ReminderShow = ({ reminder, user }) => {
  return (
    <div>
      <AuthenticatedLayout user={user} header="Reminders">
        <div className="w-screen mx-auto bg-gray-200 dark:bg-gray-800 p-6">
          <h1 className="text-2xl font-semibold mb-4 dark:text-gray-200 text-gray-800 ">Reminder Details</h1>
          <div className='text-gray-400 text-xl'>
            <strong className='text-gray-300 text-xl'>Title:</strong> {reminder.title}
          </div>
          <div className='text-gray-400 text-xl'>
            <strong className='text-gray-300 text-xl'>Description:</strong> {reminder.description}
          </div>
          <div className='text-gray-400 text-xl'>
            <strong className='text-gray-300 text-xl'>Date:</strong> {reminder.date}
          </div>
          {/* Display other reminder details here */}
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default ReminderShow;
