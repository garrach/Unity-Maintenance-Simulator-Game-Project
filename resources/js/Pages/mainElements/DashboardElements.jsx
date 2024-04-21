// DashboardElements.jsx

import React, { useEffect } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import RecentConnections from '../Dashboard/RecentConnections';
import RecentActivities from '../Dashboard/RecentActivities';
import Analytics from '../Dashboard/Analytics';
import QuickActions from '../Dashboard/QuickActions';
import SystemStatus from '../Dashboard/SystemStatus';
import VehicleList from '../Dashboard/VehicleList';
import NotificationCenter from '../Dashboard/NotificationCenter';
import MaintenanceReminders from '../Dashboard/MaintenanceReminders';
import PaymentPlanOverview from '../Dashboard/PaymentPlanOverview';
import UsersList from '../Dashboard/UsersList';


import { useDynamicContext } from '../DynamicContext';
import WishList from '../WishList';
import UnityStatus from '../Dashboard/unitySatuts';

const DashboardCard = ({ number, icon, children, span, margin }) => {
    return <>
        {span ? (

            <div className={`bg-white p-4 rounded-md shadow py-3 dark:bg-gray-800  border-orange-500 border-b-4 border-l-4 dark:text-white   ${margin}`}>
                {children}
            </div>
        ) : (
            <div className="bg-white p-4 rounded-md dark:bg-gray-800 dark:text-white shadow py-3">

                {children}
            </div>
        )}</>


};



const MainContent = (  {children, auth, usersList, currentwebSocket, display, requests }) => {
    const { props } = usePage();
    return (
        <main className="flex-2 p-4">
            <div className="grid  sm:grid-cols-2 md:grid-cols-5 gap-4 content-center m-md-n4">

                <DashboardCard span={true} margin="col-span-4 row-span-1"><QuickActions requests={requests} auth={auth} /></DashboardCard>
                <DashboardCard span={true} ><SystemStatus display={display} auth={auth} /></DashboardCard>

                <DashboardCard span={true} margin="col-span-4" ><VehicleList auth={auth} /></DashboardCard>

                <DashboardCard span={true} margin="col-span-1 row-span-2" ><RecentActivities display={display} auth={auth} currentwebSocket={currentwebSocket} /></DashboardCard>
                
                <DashboardCard span={true} margin="col-span-4 row-span-2"><RecentConnections auth={auth} /></DashboardCard>

                <DashboardCard span={true} margin="col-span-4 row-span-2" ><UsersList auth={auth} usersList={usersList} /></DashboardCard>

                <DashboardCard span={true} margin="col-span-1 row-span-2"><PaymentPlanOverview auth={auth} /></DashboardCard>


                {children}
            </div>
        </main>
    );
};

const ClientMainContent = ({ userExp, children, auth, usersList, currentwebSocket, webSocket, display, requests  }) => {
    return (
        <main className="p-4">
            <div className="grid sm:grid-cols-1 md:grid-cols-9 lg:grid-cols-9 gap-4">
                <DashboardCard number="74.89b" icon="ic_glass_buy.png" span={true} margin="col-span-4">
                    <QuickActions userExp={userExp} requests={requests} auth={auth} />
                </DashboardCard>
                <DashboardCard number="2" icon="ic_glass_users.png" span={true} margin="col-span-2">
                    <UnityStatus webSocket={webSocket} auth={auth} />
                </DashboardCard>
                <DashboardCard number="15m" icon="ic_glass_message.png" span={true} margin="col-span-3">
                    <WishList wishListItems={requests.wishListItems} auth={auth} />
                </DashboardCard>
                <DashboardCard number="32.5k" icon="ic_glass_buy.png" span={true} margin=" col-span-7">
                    <RecentConnections auth={auth} />
                </DashboardCard>
                <DashboardCard number="32.5k" icon="ic_glass_buy.png" span={true} margin="col-span-2">
                    <PaymentPlanOverview auth={auth} />
                </DashboardCard>
                <DashboardCard number="32.5k" icon="ic_glass_buy.png" span={true} margin=" col-span-5">
                    <UsersList auth={auth} usersList={usersList} />
                </DashboardCard>

            </div>
            {children}
        </main>
    );
};


const EmployeeMainContent = ({ children, auth, usersList, currentwebSocket, display, requests }) => {
    return (
        <main className="p-4">
            <div className="grid grid-cols-9 md:grid-cols-9 lg:grid-cols-9 gap-4">
                <DashboardCard number="74.89b" icon="ic_glass_buy.png" span={true} margin="col-span-4">
                    <QuickActions requests={requests} auth={auth} />
                </DashboardCard>
                <DashboardCard number="2" icon="ic_glass_users.png" span={true} margin="col-span-2">
                    <SystemStatus display={display} auth={auth} />
                </DashboardCard>
                <DashboardCard number="15m" icon="ic_glass_message.png" span={true} margin="col-span-3">
                    <VehicleList auth={auth} />
                </DashboardCard>
                <DashboardCard number="32.5k" icon="ic_glass_buy.png" span={true} margin="col-span-2">
                    <PaymentPlanOverview auth={auth} />
                </DashboardCard>
                <DashboardCard number="32.5k" icon="ic_glass_buy.png" span={true} margin="col-span-2">
                    <Analytics auth={auth} />
                </DashboardCard>
                <DashboardCard number="32.5k" icon="ic_glass_buy.png" span={true} margin="col-span-5 row-span-4">
                    <Analytics auth={auth} />
                </DashboardCard>
                <DashboardCard number="32.5k" icon="ic_glass_buy.png" span={true} margin=" col-span-6">
                    <RecentConnections auth={auth} />
                </DashboardCard>
                <DashboardCard number="32.5k" icon="ic_glass_buy.png" span={true} margin=" col-span-3">
                    <UsersList auth={auth} usersList={usersList} />
                </DashboardCard>

            </div>
            {children}
        </main>
    );
};

const DashboardElements = ({ children, auth, usersList, currentwebSocket, display, requests, webSocket, userExp}) => {
    const { dynamicValues, updateValues } = useDynamicContext();

    return (<>

        {auth.user.role === "admin" &&
            <MainContent requests={requests} auth={auth} usersList={usersList} currentwebSocket={currentwebSocket} display={display} >
                {children}
            </MainContent>}
        {auth.user.role === "client" &&
            <ClientMainContent userExp={userExp} requests={requests} auth={auth} usersList={usersList} webSocket={webSocket} currentwebSocket={currentwebSocket} display={display} >
                {children}
            </ClientMainContent>}
        {auth.user.role === "employee" &&
            <ClientMainContent userExp={userExp} webSocket={webSocket}  requests={requests} auth={auth} usersList={usersList} currentwebSocket={currentwebSocket} display={display} >
                {children}
            </ClientMainContent>}

    </>
    );
};

export default DashboardElements;
