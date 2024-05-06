import React, { useRef, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

const Index = ({ devices, reviews, comments, auth }) => {
    const [preview, setPreview] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const deviceRef = useRef();
    const { post } = useForm();

    const handlePreview = (device) => {
        setSelectedDevice(device);
        setPreview(true);
    };

    const handleWishlist = (device) => {
        if (auth.user) {
            post(route('whishlist.store', { device, user: auth.user }));
        } else {
            post(route('login'));
        }
    };

    return (
        <GuestLayout>
            {console.log(comments)}
            <div className='h-full bg-gray-100 dark:bg-gray-800'>
                {preview && selectedDevice && (
                    <div className='fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center'>
                        <div className='relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-lg'>
                            <div className='p-8'>
                                <button onClick={() => setPreview(false)} className='absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200'>
                                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                                    </svg>
                                </button>
                                <img src={'../' + selectedDevice.image} alt='' className='mx-auto mb-4 w-full h-40 object-cover rounded-lg shadow-md' />
                                <p className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200'>{`Serial Number: ${selectedDevice.serial_number}`}</p>
                                <p className='text-gray-600 dark:text-gray-400 mb-2'>{`Type: ${selectedDevice.type}`}</p>
                                <p className='text-gray-600 dark:text-gray-400 mb-6'>{`Device Price: ${selectedDevice.price}`}</p>
                                <div className='border-t border-gray-200 dark:border-gray-600 pt-4'>
                                    <h2 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200'>Reviews</h2>
                                    <ul>
                                        {Object.values(reviews).map((review, index) => (
                                            review.device_id == selectedDevice.id &&
                                            <li key={index} className='text-gray-600 dark:text-gray-400'>{review.rate}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='border-t border-gray-200 dark:border-gray-600 pt-4'>
                                    <h2 className='text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200'>Comments</h2>
                                    <ul>
                                        {comments[selectedDevice.id].map((comment, index) => (
                                            <li key={index} className='text-gray-600 dark:text-gray-400'>{comment.text}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='text-center mt-6'>
                                    <Link href={route('devices.show', { device: selectedDevice.id })} className='text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400'>See more..</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className='container mx-auto mt-4'>
                    <h1 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-500'><a href="#">../Device/Tending</a> </h1>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 overflow-x-hidden overflow-y-auto'>
                        {devices.map((device, index) => (
                            <li key={device.id} className={`bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105`}>
                                <div className='flex flex-col justify-between h-full'>
                                    <div>
                                        <button onClick={() => handleWishlist(device)} className='absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 hover:bg-orange-500 dark:hover:bg-orange-600 text-gray-800 dark:text-gray-200 hover:text-white rounded-full w-8 h-8 flex items-center justify-center'>
                                            +
                                        </button>
                                        <img src={'../' + device.image} alt='' className='mx-auto mb-4 w-full h-40 object-cover rounded-lg shadow-md' />
                                        <p className='text-lg font-semibold mb-1 text-gray-800 dark:text-gray-200'>{`Serial Number: ${device.serial_number}`}</p>
                                        <p className='text-sm text-gray-600 dark:text-gray-400 mb-1'>{`Type: ${device.type}`}</p>
                                        <p className='text-sm text-gray-600 dark:text-gray-400'>{`Device Price: ${device.price}`}</p>
                                    </div>
                                    <button onClick={() => handlePreview(device)} className='text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400 mt-2'>
                                        View
                                    </button>
                                </div>
                            </li>
                        ))}
                        {(auth.user && (auth.user.role=="admin"))&&<li className={`bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105`}>
                            <div className='flex flex-col justify-between h-full'>
                                <div className='newDevice'>
                                    <span className='text-gray-700 dark:text-gray-500 hover:text-gray-300 text-2xl'>+</span>
                                </div>
                            </div>
                        </li>}
                        
                    </ul>
                </div>
            </div>
            <style>
                {`
                .newDevice{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    height: 100%;
                    border: 2px dotted gray;
                    border-radius: 1rem;
                }
                `}
            </style>
        </GuestLayout>
    );
};

export default Index;
