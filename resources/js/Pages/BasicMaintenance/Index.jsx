import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Chart from 'react-apexcharts';


import React, { useEffect, useRef, useState } from 'react';

const BasicMaintenanceIndex = ({ auth, maintenanceTasksz }) => {
    const [maintenanceOne, setMaintenanceOne] = useState(Object.values(maintenanceTasksz));

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
    const statss = useRef([]);

    useEffect(() => {

        Object.values(maintenanceOne).map((v) => {
            statss.current.push(v.usage);
        })
        console.log(statss.current)
        return ()=>{
            statss.current=[] 
        }
    }, [])

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
                                {maintenanceOne.map((sk, index) => (
                                    sk.task && <li className='mt-4'>{sk.task.description}</li>
                                )
                                )}
                            </ul>
                        </div>
                        {/* Display Maintenance Schedule Chart */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Maintenance Schedule Chart</h2>
                            <Chart options={chartOptions} series={chartSeries} type="donut" height={200} />
                        </div>
                    </div>

                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default BasicMaintenanceIndex;
