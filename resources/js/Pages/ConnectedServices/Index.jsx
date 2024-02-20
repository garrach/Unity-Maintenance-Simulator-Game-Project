import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Chart from 'react-apexcharts';
import React, { useEffect, useState } from 'react';

const ConnectedServicesIndex = ({ connections, vehicles, devices, auth }) => {
    // Static connected services data
    const interiorDevices = ['Infotainment System', 'Climate Control', 'Heated Seats'];
    const connectedDevices = ['GPS Tracker', 'Bluetooth OBD-II Scanner', 'Smartphone Integration'];
    const [deviceChart, setDeviceChart] = useState();
    const handlDeviceChart = (device) => {
        setDeviceChart(device);
        console.log(device);
    }
    useEffect(() => {
    }, [deviceChart])
    return (
        <div className='dark:text-white dark:bg-gray-100 '>

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Connected Services</h2>}
            >
                <Head title="Connected Services" />

                <div className="bg-gray-100 dark:bg-gray-900 p-4">
                    <h1 className="text-3xl font-bold mb-4">Connected Services</h1>

                    <div className='grid md:grid-cols-2 gap-4'>

                        <div className="bg-white p-4 rounded-md shadow mb-4  dark:bg-gray-800">
                            <h2 className="text-xl font-bold mb-2">Connected Services Chart</h2>
                            {deviceChart}
                        </div>
                        <ul className="space-y-2">
                            <li className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">

                                <ul>
                                    {vehicles && vehicles.map((vehicle, index) => (
                                        <li key={index}>
                                            <ul>
                                                <li key={index} className='font-bold uppercase'>{vehicle.make}</li>
                                                <li>
                                                    <ul>
                                                        {
                                                            vehicle.devices && vehicle.devices.map((device, index) => (
                                                                <li key={index} className='text-gray-200  hover:text-gray-900'>{device.serial_number}</li>))
                                                        }
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default ConnectedServicesIndex;


{/**{connection.devices.map((device,index) => (<li key={index}>{device}</li>))} */ }