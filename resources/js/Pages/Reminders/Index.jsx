import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Link } from '@inertiajs/react';

const ReminderIndex = ({ reminders , user}) => {
  return (
    <div>
      <AuthenticatedLayout
      user={user}
      header='Reminders'
      >
       <div className="max-w-5xl dark:text-white dark:bg-gray-800 p-4 mt-4 mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Reminders</h1>
          <ul className='shadow-md rounded p-4'>
            {reminders.map((reminder) => (
              <li key={reminder.id} className="flex justify-between items-center border-b py-2  dark:text-gray-900 hover:drop-shadow-lg mb-2 p-2 rounded hover:dark:bg-gray-100 dark:bg-gray-300">
                <span>{reminder.title}</span>
                <div>
                  <Link href={route('reminders.show', reminder.id)} className="text-blue-500 hover:text-blue-700 mr-2">
                    View
                  </Link>
                  <Link href={route('reminders.edit', reminder.id)} className="text-blue-500 hover:text-blue-700 mr-2">
                    Edit
                  </Link>
                  <button className="text-red-500 hover:text-red-700" onClick={() => confirm('Are you sure you want to delete this reminder?') && deleteReminder(reminder.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <Link
                href={route('reminders.create')}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Create Reminder
          </Link>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default ReminderIndex;
