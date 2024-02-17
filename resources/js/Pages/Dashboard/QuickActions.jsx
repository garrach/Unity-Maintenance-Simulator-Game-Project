// resources/js/Components/Dashboard/QuickActions.jsx
import React from 'react';

const QuickActions = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Add Vehicle</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">Create Plan</button>
      {/* Add more actions as needed */}
    </div>
  );
};

export default QuickActions;
