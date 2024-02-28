// DashboardElements.jsx

import React from 'react';
import { Head, Link, useForm,usePage } from '@inertiajs/react';
import RecentConnections from '../Dashboard/RecentConnections';
import RecentActivities from '../Dashboard/RecentActivities';
import Analytics from '../Dashboard/Analytics';
import QuickActions from '../Dashboard/QuickActions';
import SystemStatus from '../Dashboard/SystemStatus';
import SearchFilters from '../Dashboard/SearchFilters';
import VehicleList from '../Dashboard/VehicleList';
import DeviceList from '../Dashboard/DeviceList';
import NotificationCenter from '../Dashboard/NotificationCenter';
import MaintenanceReminders from '../Dashboard/MaintenanceReminders';
import PaymentPlanOverview from '../Dashboard/PaymentPlanOverview';
import UsersList from '../Dashboard/UsersList';
import { clientSocket } from '../client.cjs';

const DashboardCard = ({ number, icon, children, span, margin }) => {
    return (
        <>
            {span ? (
                <>
                    <div className={`bg-white p-4 rounded-md shadow py-3 dark:bg-gray-800  border-indigo-500 border-b-4 border-l-4 dark:text-white   ${margin}`}>
                        <div className="flex items-center mb-4  mx-auto dark:border-gray-100 ">
                            {/*icon && <span className="text-xl"><img alt=".." /></span>
                            <span className="text-3xl">{number}</span>*/}
                        </div>

                       
                        <div>{children}</div>
                    </div>
                </>) : (<>
                    <div className="bg-white p-4 rounded-md dark:bg-gray-800 dark:text-white shadow py-3">
                        <div className="flex items-center mb-4  mx-auto dark:border-gray-100">
                            {/*icon && <span className="text-xl"><img alt=".." /></span>
                            <span className="text-3xl">{number}</span>*/}
                        </div>
                        <div>{children}</div>
                    </div>
                </>)}
        </>

    );
};



const MainContent = ({ children,auth , usersList,currentwebSocket, display,requests}) => {
    const {props}=usePage();
    return (
        <main className="flex-2 p-4">
            <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-4 content-center m-md-n4">
                <DashboardCard number="74.89b" icon="ic_glass_buy.png" span={true} margin="col-span-3 row-span-1"><QuickActions requests={requests} auth={auth} /></DashboardCard>
                <DashboardCard number="2" icon="ic_glass_users.png" span={false} ><RecentActivities display={display} auth={auth} currentwebSocket={currentwebSocket}/></DashboardCard>
                <DashboardCard number="15m" icon="ic_glass_message.png" span={false} ><RecentConnections auth={auth} /></DashboardCard>
                <DashboardCard number="188k" icon="ic_glass_buy.png" span={false} ><SystemStatus display={display}  auth={auth} /></DashboardCard>
                <DashboardCard number="71.9k" icon="ic_glass_buy.png" span={false} ><Analytics auth={auth} /></DashboardCard>
                <DashboardCard number="32.5k" icon="ic_glass_buy.png" span={false} ><UsersList auth={auth} usersList={usersList} /></DashboardCard>
                <DashboardCard number="41.5k" icon="ic_glass_buy.png" span={false} ><MaintenanceReminders auth={auth}/></DashboardCard>
                <DashboardCard number="302.5k" icon="ic_glass_buy.png" span={true} margin="col-span-2" ><VehicleList auth={auth}/></DashboardCard>
                <DashboardCard number="92.5k" icon="ic_glass_buy.png" span={false} ><SearchFilters auth={auth}/></DashboardCard>
                <DashboardCard number="57.5k" icon="ic_glass_buy.png" span={false} ><NotificationCenter auth={auth} notifications={props}/></DashboardCard>
                <DashboardCard number="57.5k" icon="ic_glass_buy.png" span={false} ><PaymentPlanOverview auth={auth}/></DashboardCard>
                {children}
            </div>
        </main>
    );
};

const DashboardElements = ({ children, auth,usersList,currentwebSocket,display,requests}) => {
    return (
        <MainContent requests={requests} auth={auth} usersList={usersList} currentwebSocket={currentwebSocket} display={display} >
            {children}
        </MainContent>
    );
};

export default DashboardElements;
