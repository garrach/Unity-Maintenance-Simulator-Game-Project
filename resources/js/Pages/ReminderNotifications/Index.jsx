import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const ReminderNotificationsIndex = ({ auth, reminders }) => {
    const [reminderNotifications, setReminderNotifications] = useState(reminders);

    useEffect(() => {
        setReminderNotifications(reminders);
    }, [reminders]);

    const handleCreateReminder = () => {
        console.log('Creating a new reminder notification...');
        // Placeholder for creating a new reminder notification
    };

    const handleEditReminder = (reminderId) => {
        console.log(`Editing reminder notification with ID: ${reminderId}`);
        // Placeholder for editing an existing reminder notification
    };

    const handleDeleteReminder = (reminderId) => {
        console.log(`Deleting reminder notification with ID: ${reminderId}`);
        // Placeholder for deleting an existing reminder notification
    };

    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Reminder Notifications</h2>}
            >
                <Head title="Reminder Notifications" />
                <div className="my-4 p-6 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-md shadow-md">
                    <h1 className="text-2xl font-semibold mb-4">Manage Your Reminder Notifications</h1>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Your Reminder Notifications</h2>
                        {reminderNotifications.length === 0 ? (
                            <p className="text-gray-600 dark:text-gray-300">No reminder notifications found.</p>
                        ) : (
                            <ul className="space-y-4">
                                {reminderNotifications.map((reminder) => (
                                    <li key={reminder.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">{reminder.title}</h3>
                                            <p className="text-sm text-gray-500">{`Date: ${reminder.date}`}</p>
                                            <p className="text-sm text-gray-500">{`Description: ${reminder.description}`}</p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleEditReminder(reminder.id)}
                                                className="text-blue-500 hover:underline"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteReminder(reminder.id)}
                                                className="text-red-500 hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Create a New Reminder Notification</h2>
                        <button
                            onClick={handleCreateReminder}
                            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                        >
                            Create Reminder
                        </button>
                    </section>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default ReminderNotificationsIndex;
