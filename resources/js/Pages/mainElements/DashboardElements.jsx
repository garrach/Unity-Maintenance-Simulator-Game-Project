// DashboardElements.jsx

import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
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

const DashboardCard = ({ number, icon, children, span, margin }) => {
    return (
        <>
            {span ? (
                <>
                    <div className={`bg-white p-4 rounded-md shadow py-3 dark:bg-gray-800  border-indigo-500 border-b-4 border-l-4 dark:text-white   ${margin}`}>
                        <div className="flex items-center mb-4  mx-auto dark:border-gray-100 ">
                            {icon && <span className="text-xl"><img alt=".." /></span>}
                            <span className="text-3xl">{number}</span>
                        </div>

                        <h2>new items</h2>
                        <div>{children}</div>
                    </div>
                </>) : (<>
                    <div className="bg-white p-4 rounded-md dark:bg-gray-800 dark:text-white shadow py-3">
                        <div className="flex items-center mb-4  mx-auto dark:border-gray-100">
                            {icon && <span className="text-xl"><img alt=".." /></span>}
                            <span className="text-3xl">{number}</span>
                        </div>
                        <h2>new items</h2>
                        <div>{children}</div>
                    </div>
                </>)}
        </>

    );
};



const MainContent = ({ children , usersList,currentwebSocket}) => {
    return (
        <main className="flex-2 p-4">
            <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-4 content-center m-md-n4">
                <DashboardCard number="74.89b" icon="ic_glass_buy.png" span={true} margin="col-span-3 row-span-1"><QuickActions /></DashboardCard>
                <DashboardCard number="2" icon="ic_glass_users.png" span={false} ><RecentActivities currentwebSocket={currentwebSocket}/></DashboardCard>
                <DashboardCard number="15m" icon="ic_glass_message.png" span={false} ><RecentConnections /></DashboardCard>
                <DashboardCard number="188k" icon="ic_glass_buy.png" span={false} ><SystemStatus  /></DashboardCard>
                <DashboardCard number="71.9k" icon="ic_glass_buy.png" span={false} ><Analytics /></DashboardCard>
                <DashboardCard number="32.5k" icon="ic_glass_buy.png" span={false} ><UsersList usersList={usersList} /></DashboardCard>
                <DashboardCard number="41.5k" icon="ic_glass_buy.png" span={false} ><MaintenanceReminders/></DashboardCard>
                <DashboardCard number="302.5k" icon="ic_glass_buy.png" span={true} margin="col-span-2" ><VehicleList/></DashboardCard>
                <DashboardCard number="92.5k" icon="ic_glass_buy.png" span={false} ><SearchFilters/></DashboardCard>
                <DashboardCard number="57.5k" icon="ic_glass_buy.png" span={false} ><PaymentPlanOverview/></DashboardCard>
                {children}
            </div>
        </main>
    );
};

const DashboardElements = ({ children ,usersList,currentwebSocket}) => {
    return (
        <MainContent usersList={usersList} currentwebSocket={currentwebSocket}>
            {children}
        </MainContent>
    );
};

export default DashboardElements;
