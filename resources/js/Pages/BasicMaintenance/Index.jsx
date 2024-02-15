import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Chart from 'react-apexcharts';


import React from 'react';

const BasicMaintenanceIndex = ({ auth }) => {



    // Static maintenance schedule
    const maintenanceSchedule = {
        oilChange: 5000,
        inspections: 10000,
        tireRotation: 7500,
        brakeFluidCheck: 15000,
        airFilterReplacement: 20000,
        // Add other maintenance tasks and intervals as needed
    };


    // Static reminder settings
    const reminderSettings = {
        emailNotifications: true,
        smsNotifications: false,
    };



    const chartOptions = {
        chart: {
            height: 200,
            type: 'donut', // Set the chart type to donut
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '0%', // Adjust the size of the donut hole
                },
            },
        },
        labels: Object.keys(maintenanceSchedule),
    };

    const chartSeries = Object.values(maintenanceSchedule);
    return (
        <div className='dark:bg-gray-900 dark:text-white'>

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Basic Maintenance</h2>}
            >
                <Head title="BasicMaintenance" />
                <div className="bg-gray-100 dark:bg-gray-900 p-4">
                    <h1 className="text-3xl font-bold mb-4">Basic Maintenance Tracking</h1>

                    <div className='grid md:grid-cols-2 gap-4'>
                        {/* Display Maintenance Schedule */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Maintenance Schedule</h2>
                            <ul>
                                <li className="mb-2"><span className="font-bold">Oil Change:</span> {maintenanceSchedule.oilChange}</li>
                                <li className="mb-2"><span className="font-bold">Inspections:</span> {maintenanceSchedule.inspections}</li>
                                <li className="mb-2"><span className="font-bold">Tire Rotation:</span> {maintenanceSchedule.tireRotation}</li>
                                <li className="mb-2"><span className="font-bold">Brake Fluid Check:</span> {maintenanceSchedule.brakeFluidCheck}</li>
                                <li className="mb-2"><span className="font-bold">Air Filter Replacement:</span> {maintenanceSchedule.airFilterReplacement}</li>
                                {/* Add other maintenance tasks and intervals as needed */}
                            </ul>
                        </div>
                        {/* Display Maintenance Schedule Chart */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Maintenance Schedule Chart</h2>
                            <Chart options={chartOptions} series={chartSeries} type="donut" height={200} />
                        </div>

                        {/* Display Reminder Settings */}
                        <div className="bg-green-100 p-4 dark:bg-gray-800 rounded-md shadow">
                            <h2 className="text-xl font-bold mb-2">Reminder Settings</h2>
                            <p className="mb-2">
                                <span className="font-bold">Email Notifications:</span> {reminderSettings.emailNotifications ? 'Enabled' : 'Disabled'}
                            </p>
                            <p className="mb-0">
                                <span className="font-bold">SMS Notifications:</span> {reminderSettings.smsNotifications ? 'Enabled' : 'Disabled'}
                            </p>
                        </div>
                    </div>

                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default BasicMaintenanceIndex;
