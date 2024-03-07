// resources/js/Pages/devices/Index.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
const Index = ({ devices, auth }) => {
    const purchased = false;
    const installded = false;
    const [preview, setPreview] = useState(false);
    const [data, setData] = useState(null);

    const handlPreview = (device) => {
        setData(device);
        setPreview(!preview);
    }
    return (
        <>
            {preview && <div className='absolute z-20 w-full h-full bg-gray-500 mx-auto modelx'>
            <div className='container mx-auto p-4'>
                <p className="text-4xl font-semibold mb-1">{`Serial Number: ${data.serial_number}`}</p>
                <p className="text-3xl text-gray-200">{`Type: ${data.type}`}</p>
                <p className="text-3xl text-gray-200">{`Device Price : ${data.price}`}</p>
                <div className='device-reviews-comments'>
                    <ul>
                        <li className='text-2xl text-gray-300'>reviews:</li>
                    </ul>
                    <ul>
                        <li className='text-2xl text-gray-300'>comments:</li>
                    </ul>
                </div>
                <Link href={route('devices.show',{ device: data.id })} className="text-2xl text-gray-300">see more..</Link>
                </div>
                <button onClick={handlPreview} className="text-xl absolute right-0 mr-4 top-0 mt-4 text-gray-200">Close</button>

            </div>}

            <div className='dark:text-white'>
                <div className="container mx-auto">
                    <h1 className="text-2xl font-semibold mb-4">Device List</h1>
                    <ul className="sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid gap-4 ">
                        {devices.map((device, index) => (
                            <li key={device.id} className={`bg-${index % 2 === 0 ? 'gray-100' : 'gray-200'} dark:bg-${index % 2 === 0 ? 'gray-800' : 'gray-700'} p-4 rounded-md shadow-md mb-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105`}>
                                <div className="flex justify-between items-center">
                                    <div className='block w-full'>
                                        {/*3D Preview*/}
                                        <canvas className='w-full h-56'></canvas>
                                        <p className="text-xl font-semibold mb-1">{`Serial Number: ${device.serial_number}`}</p>
                                        <p className="text-sm text-gray-500">{`Type: ${device.type}`}</p>
                                        <p className="text-sm text-gray-500">{`Device Price : ${device.price}`}</p>
                                        <button onClick={(e) => { e.preventDefault(); handlPreview(device) }} className="text-sm text-gray-500">View</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <style>
                {`.modelx{
                    transform:scale(0.7);
                }`}
                         </style>
        </>

    );
};
export default Index;