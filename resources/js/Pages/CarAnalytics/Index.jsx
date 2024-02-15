
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

const CarAnalyticsIndex = ({ auth }) => {

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
        acceleration: '0-60 mph in 8 seconds',
        horsepower: '180 hp',
    };
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
                                <li className="mb-2"><span className="font-bold">Make:</span> {carDetails.make}</li>
                                <li className="mb-2"><span className="font-bold">Model:</span> {carDetails.model}</li>
                                <li className="mb-2"><span className="font-bold">Year:</span> {carDetails.year}</li>
                                <li className="mb-2"><span className="font-bold">Color:</span> {carDetails.color}</li>
                                <li className="mb-2"><span className="font-bold">Mileage:</span> {carDetails.mileage}</li>
                                <li className="mb-2"><span className="font-bold">Fuel Type:</span> {carDetails.fuelType}</li>
                                <li className="mb-2"><span className="font-bold">Transmission:</span> {carDetails.transmission}</li>
                                {/* Add other details as needed */}
                            </ul>

                        </div>

                        {/* Display Analytics Data */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Analytics Data</h2>
                            <p className="mb-2"><span className="font-bold">Fuel Efficiency:</span> {analyticsData.fuelEfficiency}</p>
                            <p className="mb-2"><span className="font-bold">Maintenance Cost:</span> {analyticsData.maintenanceCost}</p>
                            <p className="mb-2"><span className="font-bold">Insurance Cost:</span> {analyticsData.insuranceCost}</p>
                            {/* Add other analytics data as needed */}
                        </div>

                        {/* Display Connected Devices */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Connected Devices</h2>
                            <ul>
                                {connectedDevices.map((device, index) => (
                                    <li key={index} className="mb-2">{device}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Display Interior Devices */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Interior Devices</h2>
                            <ul>
                                {interiorDevices.map((device, index) => (
                                    <li key={index} className="mb-2">{device}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Display Safety Features */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Safety Features</h2>
                            <ul>
                                {safetyFeatures.map((feature, index) => (
                                    <li key={index} className="mb-2">{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Display Performance Metrics */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow">
                            <h2 className="text-xl font-bold mb-2">Performance Metrics</h2>
                            <p className="mb-2"><span className="font-bold">Top Speed:</span> {performanceMetrics.topSpeed}</p>
                            <p className="mb-2"><span className="font-bold">Acceleration:</span> {performanceMetrics.acceleration}</p>
                            <p className="mb-2"><span className="font-bold">Horsepower:</span> {performanceMetrics.horsepower}</p>
                        </div>
                    </div>

                </div>
            </AuthenticatedLayout>

        </div>

    );
};

export default CarAnalyticsIndex;
