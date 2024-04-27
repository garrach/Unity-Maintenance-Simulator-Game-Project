
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { clientSocket, TMD } from '../client.cjs';



const CarAnalyticsIndex = ({ auth, vehicle, devices, connection }) => {
    const socket = clientSocket('car_analystics');

    const [dataType, setDataType] = useState({
        vehicle: vehicle,
        devices: devices,
        connection: connection,
        analytics: {},
        performance: {}
    });

    useEffect(() => {
        setDataType({ vehicle: vehicle, devices: devices, connection: connection })
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



                        {/* Display Connected Devices */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Connected Devices</h2>
                            <ul>
                                {Object.values(dataType.connection).map((value, index) => (
                                    <li key={index}>
                                        <ul>
                                            <li className="mb-2">{`${value.name}`}</li>
                                            <li className="mb-2">{`${value.installationdate}`}</li>
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default CarAnalyticsIndex;
