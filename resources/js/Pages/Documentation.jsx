import { Link } from '@inertiajs/react';
import React from 'react';


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



                    <li className="py-2"><Link href="#conclusion" className="hover:bg-gray-700 dark:hover:bg-gray-800 block px-4">Conclusion</Link></li>
                </ul>
            </div>
        </div>
    );
};





const Documentation = () => {
    return (
        <>
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen grid grid-cols-3">
                <div>
                    {SideMenu()}
                </div>
                <div className="container mx-auto py-12">
                    <h1 className="text-4xl font-bold text-center mb-8">Application Routes Documentation</h1>
                    {/* Introduction Section */}
                    <section id='introduction' className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            This document provides an overview of the routes in our Laravel application along with their functionalities and access permissions.
                        </p>
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
                   <section id="employee-role"  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Employee Role</h2>
                        <p className="text-gray-300">
                            Employees in our application have access to the following routes and functionalities to manage client data and provide support:
                        </p>
                        <ul className="list-disc ml-6 mt-4">
                            <li><span className='px-2 bg-gray-900 dark:bg-gray-700 rounded-full'>(Route: /connected-services)</span>: Displays connected services information.</li>
                            <li><span className='px-2 bg-gray-900 dark:bg-gray-700 rounded-full'>(Route: /full-maintenance-suite)</span>: Displays full maintenance suite information.</li>
                            <li><span className='px-2 bg-gray-900 dark:bg-gray-700 rounded-full'>(Route: /customizable-maintenance-schedules)</span>: Displays customizable maintenance schedules information.</li>
                            <li><span className='px-2 bg-gray-900 dark:bg-gray-700 rounded-full'>(Route: /leaderboard)</span>: Displays the leaderboard showing employee performance.</li>
                        </ul>
                    </section>

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
