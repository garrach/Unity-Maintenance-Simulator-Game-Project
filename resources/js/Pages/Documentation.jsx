import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';



const fetchData = async (endpoint, apiKey, setDataFunction) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `http://localhost:3002/api/${endpoint}`,
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey,
            },
        });
        setDataFunction(response.data);
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
    }
};




const SideMenu = () => {
    return (
        <div className="bg-gray-800 dark:bg-gray-900 text-white h-screen w-64 flex flex-col justify-between fixed">
            <div>
                <h2 className="text-2xl font-bold text-center py-4">Documentation Menu</h2>
                <ul className="pl-4">
                    <li className="py-2"><Link href="#introduction" className="hover:bg-gray-700 dark:hover:bg-gray-800 block px-4">Introduction</Link></li>
                    <li className="py-2"><Link href="#public-routes" className="hover:bg-gray-700 dark:hover:bg-gray-800 block px-4">Public Routes</Link></li>
                    <li className="py-2"><Link href="#authenticated-routes" className="hover:bg-gray-700 dark:hover:bg-gray-800 block px-4">Authenticated Routes</Link></li>
                    <li className="py-2"><Link href="#admin-routes" className="hover:bg-gray-700 dark:hover:bg-gray-800 block px-4">Admin Routes</Link></li>
                    <li className="py-2"><Link href="#employee-role" className="hover:bg-gray-700 dark:hover:bg-gray-800 block px-4">Employee Role</Link></li>
                    <li className="py-2"><Link href="#api-test" className="hover:bg-gray-700 dark:hover:bg-gray-800 block px-4">Test Api</Link></li>



                    <li className="py-2"><Link href="#conclusion" className="hover:bg-gray-700 dark:hover:bg-gray-800 block px-4">Conclusion</Link></li>
                </ul>
            </div>
        </div>
    );
};
const Documentation = (key) => {
    const { props } = usePage();
    const apiKey = props.key;
    const [userData, setUserData] = useState(null);
    const [devicesData, setDevicesData] = useState(null);
    const [connectionsData, setConnectionsData] = useState(null);
    const [vehiclesData, setVehiclesData] = useState(null);
    useEffect(() => {
        fetchData('login', apiKey, setUserData);
        console.log({ apiKey: props })
    }, [])

    return (
        <>
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex">
                <div>
                    {SideMenu()}
                </div>
                <div className="container mx-auto p-32">
                    <h1 className="text-4xl font-bold text-center mb-8">Application Routes Documentation</h1>
                    {/* Introduction Section */}
                    <section id='introduction' className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            This document provides an overview of the routes in our Laravel application along with their functionalities and access permissions.
                        </p>
                    </section>


                    {/* Download Unity Garage simulator */}
                    <section id='Download' class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-md">
                        <h2 class="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Unity Garage Simulator</h2>
                        <p class="text-lg text-gray-700 dark:text-gray-300">
                            Welcome to the Unity Garage Simulator! Step into the world of automotive innovation and exploration. Experience the thrill of customizing and interacting with intricately detailed car interiors. From tinkering with dashboard displays to adjusting seat configurations, this simulator offers a unique glimpse into the inner workings of vehicle technology.
                        </p>
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Download Now</button>
                    </section>


                    {/* Public Routes Section */}
                    <section id='public-routes' className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-4" >Public Routes</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            These routes are accessible to all users, including guests and authenticated users.
                        </p>
                        <ul className="list-disc ml-6 mt-4">
                            <li>Home Route: Displays the home page with login and registration options. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /)</span></li>
                            <li>About Us Route: Provides information about the application. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /aboutUs)</span></li>
                            <li>Contact Route: Allows users to contact the application administrators. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /contact)</span></li>
                            <li>Documentation Route: Displays the documentation of the application routes. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /documentation)</span></li>
                            <li>Devices Preview Route: Displays a preview of devices. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /preview/devices)</span></li>
                        </ul>
                    </section>

                    {/* Authenticated Routes Section */}
                    <section id='authenticated-routes' className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-4" >Authenticated Routes</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            These routes are accessible only to authenticated users.
                        </p>
                        <ul className="list-disc ml-6 mt-4">
                            <li>Dashboard Route: Displays the user dashboard with personalized information. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /dashboard)</span></li>
                            <li>User Account Routes: Allows users to view and edit their account information. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Routes: /myaccount, /userAccount/id?, /userAccount/user/id?, /profile)</span></li>
                            <li>Reports Routes: Provides routes for generating and managing reports. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Routes: /reports, /reports/applyforjob, /reports/addonrequest)</span></li>
                            <li>Basic Maintenance Route: Displays basic maintenance information. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /basic-maintenance)</span></li>
                            <li>Car Analytics Route: Displays car analytics information. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /car-analytics)</span></li>
                            <li>Unity Preview Route: Displays a preview of Unity devices. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Routes: /webPreview/unity, /unity-refresh)</span></li>
                            <li>Connected Services Route: Displays connected services information. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /connected-services)</span></li>
                            <li>Full Maintenance Suite Route: Displays full maintenance suite information. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Routes: /full-maintenance-suite, /full-maintenance-suite)</span></li>
                            <li>Customizable Maintenance Schedules Route: Displays customizable maintenance schedules information. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /customizable-maintenance-schedules)</span></li>
                            <li>Exclusive Discounts Route: Displays exclusive discounts information. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /exclusive-discounts)</span></li>
                            <li>Priority Customer Support Route: Displays priority customer support information. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /priority-customer-support)</span></li>
                            <li>Application List Route: Displays application list information. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /application-list)</span></li>
                            <li>Wishlist Routes: Provides CRUD operations for managing wishlists. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Routes: /whishlist)</span></li>
                        </ul>
                    </section>

                    {/* Admin Routes Section */}
                    <section id='admin-routes' className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-4" >Admin Routes</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            These routes are accessible only to users with administrative privileges.
                        </p>
                        <ul className="list-disc ml-6 mt-4">
                            <li>Vehicle Routes: Allows administrators to manage vehicles. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Routes: /vehicles)</span></li>
                            <li>Device Routes: Provides CRUD operations for managing devices. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Routes: /devices)</span></li>
                            <li>Payment Plan Routes: Provides CRUD operations for managing payment plans. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Routes: /paymentPlans)</span></li>
                            <li>Services Routes: Provides CRUD operations for managing services. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Routes: /services)</span></li>
                            <li>Schedule Routes: Provides CRUD operations for managing schedules. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Routes: /schedules)</span></li>
                            <li>Asset Bundles Routes: Provides CRUD operations for managing asset bundles. <span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Routes: /assetBundles)</span></li>
                        </ul>
                    </section>

                    {/* Employee Role Section */}
                    <section id="employee-role" className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Employee Role</h2>
                        <p className="text-gray-500 dark:text-gray-300">
                            Employees in our application have access to the following routes and functionalities to manage client data and provide support:
                        </p>
                        <ul className="list-disc ml-6 mt-4">
                            <li><span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /connected-services)</span>: Displays connected services information.</li>
                            <li><span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /full-maintenance-suite)</span>: Displays full maintenance suite information.</li>
                            <li><span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /customizable-maintenance-schedules)</span>: Displays customizable maintenance schedules information.</li>
                            <li><span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /leaderboard)</span>: Displays the leaderboard showing employee performance.</li>
                        </ul>
                    </section>


                    {/* API  Section */}

                    <div id="api-test" className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <span title='user authentication' className={`${userData ? 'bg-green-500' : 'bg-red-500'} w-6 h-6 rounded-full relative block float-right`}></span>

                        <h2 className="text-2xl font-semibold mb-4">API  Section</h2>
                        <p className="text-gray-300">
                            user fetch data:
                        </p>

                        <ul className="list-disc ml-6 mt-4">
                            <li><span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /api/login)</span>: Displays login services information.</li>
                            <li><span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /api/Devices)</span>: Displays full Devices information.</li>
                            <li><span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /api/Connections)</span>: Displays Connections in maintenance schedules information.</li>
                            <li><span className='px-2 bg-gray-200 dark:bg-gray-700 rounded-full'>(Route: /api/Vehicles)</span>: Displays the Listed Vehicles.</li>
                        </ul>
                    </div>

                    {/* Conclusion Section */}
                    <section id='conclusion' className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-4" >Conclusion</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            This concludes the documentation for our application routes. For more detailed information on each route and its functionalities, refer to the corresponding controller methods and route definitions in the application codebase.
                        </p>
                    </section>
                </div>
            </div>
        </>

    );
};

export default Documentation;
