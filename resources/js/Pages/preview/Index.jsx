import React, { useEffect, useRef, useState } from "react";
import { socketHandler } from './clientSocket.cjs';
import { instantiatePlaces2, instantiatePlaces } from './loadData.cjs';
import { MxlastPos } from './dragAndDrop.cjs';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from "../Navbar.jsx";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Preview = ({ auth }) => {
    // State and refs initialization
    const { data, setData, post } = useForm();
    const deviceRef = useRef(null); // Initialize with null
    const [deviceArr, setDevicesArr] = useState([]);
    const [unityTracking, setUnityTracking] = useState(false);
    const messageRef = useRef([]);
    const moveingArr = useRef([]);
    const [moveingTest, setMoveingTest] = useState('yo');
    const messageType = useRef(null);
    const DvTrak = useRef(null);
    const socket = useRef(null); // Initialize with null

    // Function to load data based on unityTracking state
    async function loadDataX() {
        try {
            if (!unityTracking) {
                deviceRef.current = await instantiatePlaces2(socket.current, auth.user);
                setDevicesArr(deviceRef.current.elements);
                moveingArr.current = deviceRef.current.elements;
            } else {
                instantiatePlaces(messageArr.current, socket.current);
            }
        } catch (error) {
            console.error("Error loading data:", error);
            // Handle error appropriately
        }
    }

    // Effect hook to initialize socket
    useEffect(() => {
        socket.current = socketHandler();
    }, []);

    // Function to handle moving listener
    async function movingListener(e, devicesList) {
        e.preventDefault();
        const databasearr = {
            data: devicesList.map(element => JSON.parse(element.getAttribute('value')).data)
        };
        try {
            await post(route('unity.move', databasearr)); 
            // Clear the data array
            databasearr.data = [];
        } catch (error) {
            console.error("Error posting data:", error);
            // Handle error appropriately
        }
    }

    // Load data when unityTracking changes
    useEffect(() => {
        loadDataX();
    }, [unityTracking]);

    const [currentDevice, setCurrentDevice] = useState();
    const [currentDevicePos, setCurrentDevicePos] = useState();
    const currentDeviceDes = useRef();

    const handleMouseDown = (event) => {
        if (event.target.nodeName === "SPAN" && event.target.classList.contains("placement")) { // Target specific class
            setCurrentDevice(event.target);

            const { data } = currentDeviceDes.current = JSON.parse(event.target.attributes[0].nodeValue);
            // Access specific attributes or create an object
            const info = {
                id: event.target.id, // Access ID attribute
                className: event.target.className,
                data: data
            };
            currentDeviceDes.current = info;
            if (currentDeviceDes) {
                setCurrentDevicePos(currentDeviceDes.current.data.position);
            }
        }
    };



    // Add event listener when component mounts
    useEffect(() => {
        window.addEventListener("mousedown", handleMouseDown);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);


    const UserGuide = ({ layer }) => {
        const [showGuide, setShowGuide] = useState(true);

        const toggleGuide = () => {
            setShowGuide(!showGuide);
        };

        return (
            <div>
                <button className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow" onClick={toggleGuide}>
                    {showGuide ? 'Hide Guide' : 'Show Guide'}
                </button>
                {showGuide && (
                    <div className={`max-w-xl mx-auto px-4 py-8 fixed top-20 right-4 ${layer} text-gray-800 dark:text-white bg-white dark:bg-gray-800 rounded shadow-lg`}>
                        <button className="absolute top-2 right-2 text-gray-500" onClick={toggleGuide}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Step 1: Click to Start</h3>
                            <p>Click on the Circles to initiate control.</p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Step 2: Drag to Move</h3>
                            <p>Once the Circle is clicked, drag your mouse in the desired direction to move the Device.</p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Step 3: Release to Stop</h3>
                            <p>Release the mouse button to stop the Device's movement.</p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Step 4: Normalize Positions To Unity</h3>
                            <button className="dark:bg-orange-500 bg-blue-500 hover:text-gray-200 dark:text-gray-800 hover:font-bold p-2 rounded shadow-md">
                                <Link href={route('unity.index')}>Normalize</Link>
                            </button>
                        </div>
                        <div className="bg-blue-100 text-blue-700 border border-blue-300 rounded p-4 mb-6">
                            <h3 className="text-lg font-semibold mb-2">Important Note:</h3>
                            <p>Ensure that you have a stable internet connection for optimal performance.</p>
                        </div>
                    </div>
                )}
            </div>
        );
    };
    const DeviceIncicator = ({ Device }) => {
        const cords = { x: -100, y: 0 };

        if (Device) {
            cords.x = Device.getBoundingClientRect().left;
            cords.y = Device.getBoundingClientRect().top;
        }

        return (
            <div className="absolute border-2 border-indigo-500 z-10 p-4 rounded-full" style={{ width: '25px', height: '25px', top: cords.y - 5.5, left: cords.x - 6 }}>

            </div>
        );
    };
    const [showDetailsPnl,setshowDetailsPnl]=useState(false);
const showDetails=(e)=>{
    e.preventDefault()
    setshowDetailsPnl(!showDetailsPnl);
}
    // JSX rendering
    return (
        <>
            <AuthenticatedLayout user={auth.user} header={<h2 className='dark:text-white'>Devices Placement</h2>}>
            <Head title="Unity Details" />

                <DeviceIncicator Device={currentDevice} />
                <div className="place" onMouseDown={(e)=>{e.preventDefault();setshowDetailsPnl(!showDetailsPnl)}}></div>
                <UserGuide layer="z-10" />
                {unityTracking ? (
                    <>
                        <h2>Retrieve from Unity Live Client</h2>
                        <ul>
                            {messageArr.current.map((element, index) => (
                                <li key={index}>{`ID:${index} position: Vector3 (x: ${element.position.x}, y: ${element.position.y}, z: ${element.position.z})`}</li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <>
                        {deviceRef.current ? (
                            <div className="text-white dark:text-white w-fit z-10 fixed">
                                <button className="p-4 bg-gray-300" onClick={(e) => movingListener(e, moveingArr.current)}>Sync positions</button>
                                <h2>Retrieve from JSON Generated file</h2>

                            </div>
                        ) : (
                            <>
                                <h2>Retrieve from Unity Live Client, JSON Fail</h2>
                            </>
                        )}

                        {currentDeviceDes.current&& !showDetailsPnl && currentDevicePos && (
                            <div className="fixed bottom-4 left-4 z-50 dark:text-white bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                    <h1 className="text-lg font-semibold">Device Details</h1>
                                    <button
                                    onClick={(e)=>{showDetails(e)}} 
                                    
                                    className="text-gray-600 hover:text-gray-800 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                {currentDevice.attributes &&
                                    <>
                                        <div className="dark:bg-gray-700 border-2 border-indigo-500 dark:text-gray-300 rounded-md p-2 mb-2">
                                            <h2 className="text-sm font-semibold">{currentDevice.attributes[1].nodeValue}</h2>
                                        </div>
                                        <div className="dark:bg-gray-700 border-2 border-indigo-500 dark:text-gray-300 rounded-md p-2 mb-2">
                                            <h2 className="text-sm font-semibold">{currentDevice.attributes[0].nodeValue}</h2>
                                        </div>
                                    </>


                                }
                                <div className="dark:bg-gray-700 border-2 border-indigo-500 dark:text-gray-300 rounded-md p-2 mb-2">
                                    <h2 className="text-sm font-semibold">{`Vector3: {${parseFloat(currentDevicePos.x).toFixed(3)}, ${parseFloat(currentDevicePos.y).toFixed(3)}, ${parseFloat(currentDevicePos.z).toFixed(3)}}`}</h2>
                                    <h3 className="text-xs">{`Vector2: {${Math.floor(MxlastPos.data.x)}, ${Math.floor(MxlastPos.data.y)}}`}</h3>
                                </div>
                            </div>
                        )}

                    </>
                )}

                {/* Inline styles */}
                <style>
                    {`
                    *{
                        user-select: none;
                    }
                    .placement {
                        position: absolute;
                        display: block;
                        width: 1.5rem;
                        height: 1.5rem;
                        border-radius:100%;
                        z-index:11;
                    }
                    .placement:hover {
                        background: red !important;
                    }
                    .place {
                        position: relative;
                        top: 0;
                        z-index: 9;
                        width: 100%;
                        height: 100vh;
                        background-image: linear-gradient(rgba(255, 255, 255, 0) 1px, #8f8f8f  1px), linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, #8f8f8f 1px);
                        background-size: 20px 20px;
                    }
                    @media (prefers-color-scheme: dark) {
                        .place {
                            background-image: linear-gradient(rgba(255, 255, 255, 0) 1px, white  1px), linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, white 1px);
                        }
                        .placement{
                            background: #8996a9 ;
                        }
                      
                      
                      }
                      @media (prefers-color-scheme: light) {
                        .place {
                            background-image: linear-gradient(rgba(255, 255, 255, 0) 1px, #8f8f8f  1px), linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, #8f8f8f 1px);
                        }
                        .placement{
                            background: blue ;
                        }
                      
                      }
                `}
                </style>
            </AuthenticatedLayout>
        </>
    );
};

export default Preview;
