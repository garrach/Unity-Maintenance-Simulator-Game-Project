// resources/js/Components/Dashboard/MaintenanceReminders.jsx
import React from 'react';

const MaintenanceReminders = ({ reminder }) => {
const reminders=[{
  id:'',
  subject:'Dash cam pending',
  details:'waiting for device attach..',
}]
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Maintenance Reminders</h2>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder.id}>
            <p>Subject: {reminder.subject}</p>
            <p>Details: {reminder.details}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaintenanceReminders;
