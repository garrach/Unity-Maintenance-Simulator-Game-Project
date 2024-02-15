import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Chart from 'react-apexcharts';

import BasicMaintenanceTracking from './BasicMaintenance/Index';
import CarAnalytics from './CarAnalytics/Index';
import ConnectedServices from './ConnectedServices/Index';
import ReminderNotifications from './ReminderNotifications/Index';
import FullMaintenanceSuite from './FullMaintenanceSuite/Index';
import CustomizableMaintenanceSchedules from './CustomizableMaintenanceSchedules/Index';
import ExclusiveDiscounts from './ExclusiveDiscounts/Index';
import PriorityCustomerSupport from './PriorityCustomerSupport/Index';
import AdvancedMaintenanceReports from './AdvancedMaintenanceReports/Index';
import DashboardElements from './mainElements/DashboardElements';

import {clientSocket} from './client.cjs';
import { useEffect, useState } from 'react';
import AlertDialog from '@/Components/AlertDialog';
export default function Dashboard({ auth }) {
  const [isAlertDialogOpen, setAlertDialogOpen] = useState(false);
  const [messageObject,setUserMessage]=useState({ message: 'Welcome, WebSocket to provide realtime data monitoring' });
  useEffect(()=>{
    clientSocket(messageObject);
    //setAlertDialogOpen(!isAlertDialogOpen)
  },[messageObject])
const handlinputchange=(e)=>{
  setUserMessage({ message: e.target.value })
}
  const chartData = {
    series: [{
      name: 'Sales',
      data: [30, 45, 25, 60, 20, 35],
    }],
    options: {
      chart: {
        type: 'scatter',
        height: 350,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
      yaxis: {
        title: {
          text: 'Sales (in units)',
        },
      },
    },
  };
  const onClose=()=>{
    setAlertDialogOpen(!isAlertDialogOpen)
    }
  return (
    <>

      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard - {auth.user.role}</h2>}
      >
        <Head title="Dashboard" />
        {isAlertDialogOpen && (<AlertDialog title="WebSocket" message={messageObject.message} onClose={onClose} />)}
        <div className="py-0">
          <div class="sm:flex side-menu dark:bg-gray-900">
            <div className="flex h-screen bg-gray-200">
              {/* Sidebar */}
              <aside className="bg-gray-800 text-white md:w-64 w-full">
                <nav>
                  <ul className="py-4 mmLi">
                    <li><Link href={route('basic-maintenance')}>Basic Maintenance</Link></li>
                    <li><Link href={route('car-analytics')}>Car Analytics</Link></li>
                    <li><Link href={route('connected-services')}>Connected Services</Link></li>
                    <li><Link href={route('reminder-notifications')}>Reminder Notifications</Link></li>
                    <li><Link href={route('full-maintenance-suite')}>Full Maintenance Suite</Link></li>
                    <li><Link href={route('customizable-maintenance-schedules')}>Customizable Schedules</Link></li>
                    <li><Link href={route('exclusive-discounts')}>Exclusive Discounts</Link></li>
                    <li><Link href={route('priority-customer-support')}>Priority Support</Link></li>
                    <li><Link href={route('advanced-maintenance-reports')}>Advanced Reports</Link></li>
                  </ul>
                </nav>
              <div className='really-idk mx-auto flex bg-gray-800'>
                <span>
                  <img src="" alt="" />
                </span>
                <h3>{auth.user.name}</h3>
              </div>
              </aside>
            </div>
            <div className="relative bg-gray-100 menu-content">
              <DashboardElements/>
            </div>
          </div>
        </div>

      </AuthenticatedLayout>

      <style>
        {` 
        .really-idk{
          width: inherit;
          position: absolute;
          height: 5rem;
          bottom: 0;
        }
          .menu-content{
            width:100%;
            height:auto;
            background-color:transparent;

          }
          .mmLi li{
            display:flex;
            width:100%;
            height:auto;
            padding:20px;
            background-color:transparent;
            transition: all 300ms ease;
          }
          .mmLi ul{
            width:100%;
            height:auto;
          }
         
          .mmLi li:hover{
            background-color:black;
            color:white;
            cursor:pointer;
          }
          `}
      </style>
    </>
  );
}
