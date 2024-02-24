import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const ReminderNotificationsIndex = ({ auth }) => {
  const [reminders, setReminders] = useState([
    { id: 1, text: 'Meeting at 10 AM', date: '2024-03-01' },
    { id: 2, text: 'Submit report by 3 PM', date: '2024-03-03' },
    // Add more reminders as needed
  ]);

  const [newReminderText, setNewReminderText] = useState('');
  const [newReminderDate, setNewReminderDate] = useState('');
  const [error, setError] = useState('');

  const addReminder = () => {
    if (newReminderText && newReminderDate) {
      const newReminder = {
        id: Date.now(),
        text: newReminderText,
        date: newReminderDate,
      };

      setReminders((prevReminders) => [...prevReminders, newReminder]);
      setNewReminderText('');
      setNewReminderDate('');
      setError('');
    } else {
      setError('Both text and date are required.');
    }
  };

  const deleteReminder = (id) => {
    setReminders((prevReminders) => prevReminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div>
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Reminder Notifications</h2>}
      >
        <Head title="Reminder Notifications" />
        <div className="my-4 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Your Reminders</h1>

          {reminders.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300">No reminders found.</p>
          ) : (
            <ul className="space-y-4">
              {reminders.map((reminder) => (
                <li key={reminder.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow-md">
                  <h2 className="text-lg font-semibold mb-2">{reminder.text}</h2>
                  <p className="text-sm text-gray-500">Date: {reminder.date}</p>
                  <button
                    onClick={() => deleteReminder(reminder.id)}
                    className="text-red-500 hover:underline mt-2"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Add New Reminder</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addReminder();
              }}
            >
              <div className="mb-4">
                <label htmlFor="newReminderText" className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                  Reminder Text
                </label>
                <input
                  type="text"
                  id="newReminderText"
                  value={newReminderText}
                  onChange={(e) => setNewReminderText(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="newReminderDate" className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                  Reminder Date
                </label>
                <input
                  type="date"
                  id="newReminderDate"
                  value={newReminderDate}
                  onChange={(e) => setNewReminderDate(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Add Reminder
              </button>
            </form>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default ReminderNotificationsIndex;
