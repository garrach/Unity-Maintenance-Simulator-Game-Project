import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const CustomizableMaintenanceSchedulesIndex = ({ auth }) => {
    const [maintenanceSchedules, setMaintenanceSchedules] = useState([
        { id: 1, name: 'Monthly Checkup', frequency: 'Monthly', lastModified: '2024-03-01' },
        { id: 2, name: 'Yearly Inspection', frequency: 'Yearly', lastModified: '2024-03-03' },
        // Add more schedules as needed
      ]);
  useEffect(() => {
    // Fetch maintenance schedules data from your API or database
    // Example API call:
    // fetchMaintenanceSchedules().then((data) => setMaintenanceSchedules(data));
    // For now, let's assume an empty array since we don't have data
    //setMaintenanceSchedules([]);
  }, []);

  const handleCreateSchedule = () => {
    // Placeholder for creating a new maintenance schedule
    console.log('Creating a new maintenance schedule...');
  };

  const handleEditSchedule = (scheduleId) => {
    // Placeholder for editing an existing maintenance schedule
    console.log(`Editing maintenance schedule with ID: ${scheduleId}`);
  };

  const handleDeleteSchedule = (scheduleId) => {
    // Placeholder for deleting an existing maintenance schedule
    console.log(`Deleting maintenance schedule with ID: ${scheduleId}`);
  };

  return (
    <div>
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Customizable Maintenance Schedules</h2>}
      >
        <Head title="Customizable Maintenance Schedules" />
        <div className="my-4 p-6 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Manage Your Maintenance Schedules</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Your Custom Maintenance Schedules</h2>
            {maintenanceSchedules.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-300">No maintenance schedules found.</p>
            ) : (
              <ul className="space-y-4">
                {maintenanceSchedules.map((schedule) => (
                  <li key={schedule.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{schedule.name}</h3>
                      <p className="text-sm text-gray-500">{`Frequency: ${schedule.frequency} | Last Modified: ${schedule.lastModified}`}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditSchedule(schedule.id)}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteSchedule(schedule.id)}
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
            <h2 className="text-xl font-semibold mb-2">Create a New Maintenance Schedule</h2>
            <button
              onClick={handleCreateSchedule}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Create Schedule
            </button>
          </section>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default CustomizableMaintenanceSchedulesIndex;
