import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const FullMaintenanceSuiteIndex = ({ auth }) => {
    const [maintenanceTasks, setMaintenanceTasks] = useState([
        { id: 1, device: 'Infotainment System', task: 'Software Update', status: 'scheduled' },
        { id: 2, device: 'Air Conditioning Unit', task: 'Clean Filters', status: 'completed' },
        { id: 3, device: 'GPS Navigation', task: 'Calibration', status: 'scheduled' },
        { id: 4, device: 'Seat Heaters', task: 'Check Wiring', status: 'scheduled' },
        { id: 5, device: 'Dashboard Display', task: 'Firmware Upgrade', status: 'completed' },
        // Add more interior device maintenance tasks as needed
      ]);
      const [maintenanceData, setMaintenanceData] = useState([
        { id: 1, task: 'Inspect Equipment', status: 'completed', date: '2024-03-01' },
        { id: 2, task: 'Replace Filters', status: 'scheduled', date: '2024-03-03' },
        // Add more maintenance data as needed
      ]);
      const [assets, setAssets] = useState([
        { id: 1, name: 'Vehicle GPS Units', category: 'Electronics', location: 'Warehouse A' },
        { id: 2, name: 'Industrial Machinery', category: 'Machinery', location: 'Factory B' },
        // Add more assets as needed
      ]);
      const generateReport = () => {
        // Placeholder for generating a maintenance report
        console.log('Generating maintenance report...');
      };
    
      const handleAssetAction = (assetId, action) => {
        // Placeholder for handling asset actions (e.g., edit, delete)
        console.log(`Asset ${assetId} ${action}`);
      };
  const handleTaskAction = (taskId, action) => {
    // Placeholder for handling task actions (e.g., mark as completed)
    console.log(`Task ${taskId} ${action}`);
  };

  return (
    <div>
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Full Maintenance Suite</h2>}
      >
        <Head title="Full Maintenance Suite" />
        <div className="my-4 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Welcome to the Full Maintenance Suite</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Scheduled Maintenance</h2>
            {maintenanceTasks.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-300">No scheduled maintenance tasks found.</p>
            ) : (
              <ul className="space-y-4">
                {maintenanceTasks.map((task) => (
                  <li key={task.id} className={`bg-${task.status === 'completed' ? 'green-100' : 'yellow-100'} dark:bg-${task.status === 'completed' ? 'green-700' : 'yellow-700'} p-4 rounded-md shadow-md flex items-center justify-between`}>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{task.device}</h3>
                      <p className={`text-sm text-gray-500 ${task.status === 'completed' ? 'line-through' : ''}`}>{task.status === 'completed' ? 'Completed' : 'Scheduled'}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleTaskAction(task.id, 'complete')}
                        className={`text-white px-3 py-1 rounded bg-${task.status === 'completed' ? 'gray' : 'green'}-500 hover:bg-${task.status === 'completed' ? 'gray' : 'green'}-600`}
                        disabled={task.status === 'completed'}
                      >
                        Mark as Complete
                      </button>
                      {/* Add more buttons for other actions if needed */}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Asset Management</h2>
            <p className="text-gray-600 dark:text-gray-300">Track and manage your assets efficiently.</p>
            {/* You can add components and functionality related to asset management */}
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">List of Assets</h2>
            {assets.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-300">No assets found.</p>
            ) : (
              <ul className="space-y-4">
                {assets.map((asset) => (
                  <li key={asset.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{asset.name}</h3>
                      <p className="text-sm text-gray-500">{`Category: ${asset.category} | Location: ${asset.location}`}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAssetAction(asset.id, 'edit')}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleAssetAction(asset.id, 'delete')}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                      {/* Add more buttons for other actions if needed */}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Add New Asset</h2>
            {/* Add a form or components for adding new assets */}
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Reports and Analytics</h2>
            <p className="text-gray-600 dark:text-gray-300">Generate reports and analyze maintenance data.</p>
           
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Maintenance Data</h2>
            {maintenanceData.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-300">No maintenance data found.</p>
            ) : (
              <ul className="space-y-4">
                {maintenanceData.map((entry) => (
                  <li key={entry.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                    <h3 className="text-lg font-semibold mb-2">{entry.task}</h3>
                    <p className="text-sm text-gray-500">{`Status: ${entry.status} | Date: ${entry.date}`}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Generate Maintenance Report</h2>
            <button
              onClick={generateReport}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Generate Report
            </button>
          </section>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default FullMaintenanceSuiteIndex;
