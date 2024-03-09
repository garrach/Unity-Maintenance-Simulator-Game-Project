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
    const [labels, setLabels] = useState([]);
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
        labels: labels,
        legend: {
            show: true,
            position: 'right', // You can change the position if needed
            horizontalAlign: 'left', // You can adjust alignment if needed
            fontSize: '14px',
            labels: {
                colors: ['#ff0000', '#00ff00', '#0000ff'], // Set the legend label colors here
            },
        },
    };
    const statss = useRef([]);
    const [chartSeries, setChartSeries] = useState([]);
    useEffect(() => {
        statss.current = [];
        const labels = [];
        const infos = [];
        const mat = Object.values(maintenanceOne);
        const usage = Object.values(mat);
        usage.map((u) => {
            statss.current.push(u.usage);
            labels.push(u.device.type);
        })
        setLabels(labels);
        setChartSeries(statss.current);
        return () => {
            statss.current = [];
        }
    }, [])
    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Basic Maintenance</h2>}
            >
                <Head title="BasicMaintenance" />
                <div className="bg-gray-100 dark:bg-gray-900 p-4">
                    <h1 className="text-3xl font-bold mb-4">Basic Maintenance Tracking</h1>
                    <div className='grid md:grid-cols-1 gap-4 container mx-auto'>
                        {/* Display Maintenance Schedule Chart */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4 ">
                            <h2 className="text-xl font-bold mb-2">Maintenance Chart</h2>
                            {chartSeries && <Chart options={chartOptions} series={chartSeries} type="donut" height={200} />}
                        </div>
                        {/* Display Maintenance Schedule */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Maintenance </h2>
                            <ul>
                                {maintenanceOne.map((sk, index) => (
                                    <li className='mt-4' key={index}>
                                        <ul>
                                            <li>{`${sk.device.type}`}</li>
                                            <li>{sk.task && (`${sk.task.description}`)}</li>
                                            <li>{sk.usage && (`${sk.usage} EXP`)}</li>
                                        </ul>
                                    </li>
                                )
                                )}
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};
export default BasicMaintenanceIndex;
