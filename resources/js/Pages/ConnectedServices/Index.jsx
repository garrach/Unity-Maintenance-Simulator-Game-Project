import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Chart from 'react-apexcharts';
import React from 'react';

const ConnectedServicesIndex = ({ auth }) => {
    // Static connected services data
    const interiorDevices = ['Infotainment System', 'Climate Control', 'Heated Seats'];
    const connectedDevices = ['GPS Tracker', 'Bluetooth OBD-II Scanner', 'Smartphone Integration'];
    const connectedServicesData = {
        autoRepairShops: 8,
        exclusiveDiscounts: 4,
        priorityService: 6,
    };

    const chartOptions = {
        chart: {
            height: 200,
            width: 200,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: Object.keys(connectedServicesData),
        },
    };

    const chartSeries = [{
        name: 'Connected Services Data',
        data: Object.values(connectedServicesData),
    }];
    return (
        <div>

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Connected Services</h2>}
            >
                <Head title="Connected Services" />

                <div className="bg-gray-100 p-4">
                    <h1 className="text-3xl font-bold mb-4">Connected Services</h1>

                    {/* Display Connected Services Chart */}
                 

                    <div className='grid md:grid-cols-2 gap-4'>

                    <div className="bg-white p-4 rounded-md shadow mb-4">
                        <h2 className="text-xl font-bold mb-2">Connected Services Chart</h2>
                        <Chart options={chartOptions} series={chartSeries} type="bar" height={200} />
                    </div>
                        {/* Display Additional Connected Services Details */}
                        <div className="bg-white p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Additional Details</h2>
                            <p className="mb-2">Auto Repair Shops: {connectedServicesData.autoRepairShops}</p>
                            <p className="mb-2">Exclusive Discounts: {connectedServicesData.exclusiveDiscounts}</p>
                            <p className="mb-2">Priority Service: {connectedServicesData.priorityService}</p>
                            {/* Add other connected services details as needed */}
                        </div>
                        <div className="bg-white p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Connected Devices</h2>
                            <ul>
                                {connectedDevices.map((device, index) => (
                                    <li key={index} className="mb-2">{device}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-4 rounded-md shadow">
                            <h2 className="text-xl font-bold mb-2">Interior Devices</h2>
                            <ul>
                                {interiorDevices.map((device, index) => (
                                    <li key={index} className="mb-2">{device}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default ConnectedServicesIndex;
