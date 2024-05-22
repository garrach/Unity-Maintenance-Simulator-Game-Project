import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useRef, useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserCircle, faUserTie, faUserShield, faHandPointer, faCog,
    faWifi,
    faToolbox,
    faCalendarCheck,
    faDatabase,
    faTrophy,
    faBriefcase,
    faChartLine
} from '@fortawesome/free-solid-svg-icons';
const Index = ({ paymentPlans, auth }) => {
    const freeServiceList = ['Basic Maintenance Tracking'];
    const paidServiceList = ['Full Maintenance Suite'];
    return (
        <div className="dark:text-white min-h-screen bg-gray-100 dark:bg-gray-800">
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Dashboard - {auth.user.role}
                    </h2>
                }
            >
                <Head title="Plan Details" />
                <form>
                    <div className="my-4 mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full">
                        <h1 className="text-2xl font-semibold mb-6 text-center">Service Plans</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {paymentPlans.map((plan, index) => (
                                <div key={index} className="bg-white relative mb-8 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:bg-cyan-700 transition-all duration-200">
                                    <div className="mt-4 flex justify-center">
                                        <FontAwesomeIcon icon={getIconForPlan(plan.name)} className="text-2xl" />
                                    </div>
                                    <h2 className="text-lg font-semibold">{plan.name}</h2>
                                    <table className="mt-2 text-sm text-gray-600 dark:text-gray-300" style={{ width: '90%' }}>
                                        <thead>
                                        <tr className='bg-gray-500'>
                                            <th>
                                                #
                                            </th>
                                            <th>
                                                Service
                                            </th>
                                            <th>
                                                purchased
                                            </th>
                                            <th>
                                                details
                                            </th>
                                        </tr>
                                        </thead>
                                       
                                        <tbody className='text-center'>
                                            {plan.services.map((service, index) => (
                                                <tr key={index} className="mt-1 py-8">
                                                    <td><FontAwesomeIcon icon={getIconForService(service.name)} className="text-sm" /></td>
                                                    <td>{service.name}</td>
                                                    <td>
                                                        {'free' === service.stat.toLowerCase()
                                                            ? 'Free' :
                                                            'paid' === service.stat.toLowerCase()
                                                            ? 'Paid' : '(N/A)'
                                                        }
                                                    </td>
                                                    <td><Link href={route('services.show', service.id)}>View</Link></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    </div>
                </form>
                <div>
                    <Link href={route('priority-customer-support')}>Customer Support</Link>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};
function getIconForPlan(planName) {
    switch (planName.toLowerCase()) {
        case 'client plan':
            return faUserCircle;
        case 'admin plan':
            return faUserTie;
        case 'employee plan':
            return faUserShield;
        default:
            return faUserCircle;
    }
}
const iconMappings = {
    "Basic Maintenance Tracking": faCog,
    "Car Analytics": faChartLine,
    "Connected Services": faWifi,
    "Full Maintenance Suite": faToolbox,
    "Customizable Maintenance Schedules": faCalendarCheck,
    "Priority Customer Support": faDatabase,
    "Coinsystem": faTrophy,
    "JobApplications": faBriefcase,
    "LeaderBoard": faTrophy,
    "Unity Data Monitoring": faChartLine
};
function getIconForService(service) {
    return iconMappings[service] || faUserCircle;
}
export default Index;
