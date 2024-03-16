
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { clientSocket, TMD } from '../client.cjs';



const CarAnalyticsIndex = ({ auth }) => {
    const socket = clientSocket('car_analystics');

    const [dataType, setDataType] = useState({
        vehicle: {},
        devices: [],
        analytics: {},
        performance: {}
    });

    const [messageData, setMessageData] = useState(TMD('', '', dataType));

    const feedprovider = () => {
        const feed = TMD('carAnalytics', 'retrieve data from the server', {});
        socket.send(JSON.stringify(feed));
    };

    // Static car details
    const carDetails = {
        make: 'Toyota',
        model: 'Camry',
        year: 2022,
        color: 'Silver',
        mileage: '10,000 miles',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        // Add other details as needed
    };

    // Static analytics data
    const analyticsData = {
        fuelEfficiency: '25 MPG',
        maintenanceCost: '$300',
        insuranceCost: '$500',
        // Add other analytics data as needed
    };

    // Static connected devices
    const connectedDevices = ['GPS Tracker', 'Bluetooth OBD-II Scanner', 'Smartphone Integration'];

    // Static interior devices
    const interiorDevices = ['Infotainment System', 'Climate Control', 'Heated Seats'];

    // Static safety features
    const safetyFeatures = ['Anti-lock Braking System (ABS)', 'Airbags', 'Lane Departure Warning'];

    // Static performance metrics
    const performanceMetrics = {
        topSpeed: '120 mph',
        acceleration: '0-60 mph in 80 seconds',
        horsepower: '180 hp',
    };

    useEffect(() => {
        setDataType({ vehicle: carDetails, devices: connectedDevices, analytics: analyticsData, performance: performanceMetrics })
    }, [])

    return (
        <div className='dark:text-white dark:bg-gray-900'>

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Car Analytics</h2>}
            >
                <Head title="Car Analytics" />
                <div className="bg-gray-100 p-4 dark:bg-gray-900">
                    <h1 className="text-3xl font-bold mb-4">Car Analytics</h1>

                    <div className='grid md:grid-cols-3 gap-4'>
                        {/* Display Car Details */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Car Details</h2>
                            <ul>
                                {Object.entries(dataType.vehicle).map(([key, value]) => (
                                    <li key={key} className="mb-2">
                                        <span className="font-bold">{key}:</span> {value}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Display Analytics Data */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Analytics Data</h2>
                            {Object.entries(dataType.analytics).map(([key, value]) => (
                                <p key={key} className="mb-2">
                                    <span className="font-bold">{key}:</span> {value}
                                </p>
                            ))}
                        </div>

                        {/* Display Connected Devices */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Connected Devices</h2>
                            <ul>
                                {dataType.devices.map((device, index) => (
                                    <li key={index} className="mb-2">{device}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Display Performance Metrics */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow">
                            <h2 className="text-xl font-bold mb-2">Performance Metrics</h2>
                            {Object.entries(dataType.performance).map(([key, value]) => (
                                <p key={key} className="mb-2">
                                    <span className="font-bold">{key}:</span> {value}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default CarAnalyticsIndex;
