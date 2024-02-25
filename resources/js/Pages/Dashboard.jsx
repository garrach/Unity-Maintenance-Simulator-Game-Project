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

import { clientSocket } from './client.cjs';
import { useEffect, useState } from 'react';
import AlertDialog from '@/Components/AlertDialog';
import Sidebar from './sideBar';
export default function Dashboard({ auth , usersList}) {
  const [isAlertDialogOpen, setAlertDialogOpen] = useState(false);
  const [WebSocketOn, setWebSocketOn] = useState(false);
  const [webSocketHost, setwebSocketHost] = useState('');
  const [currentwebSocket, setcurrentwebSocket] = useState(null);
  const [messageObject, setUserMessage] = useState({ message: 'Welcome, WebSocket to provide realtime data monitoring' });
  const handlinputchange = (e) => {
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
  const onClose = () => {
    setAlertDialogOpen(!isAlertDialogOpen)
  }
  const handlewebSocket = () => {
   const webSocket = clientSocket(messageObject);
    setcurrentwebSocket(webSocket)
    setWebSocketOn(true);
    setAlertDialogOpen(!isAlertDialogOpen)
    const host = new URL(webSocket.url).host;
    setwebSocketHost(host);
    webSocket.addEventListener('open',(event)=>{
      webSocket.send(JSON.stringify({type:"poke",data:"inner client on"}))
    })
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
      
          <div className="sm:flex side-menu dark:bg-gray-900">
            <div className="flex bg-gray-200"> 
            <Sidebar auth={auth} expand={false}></Sidebar>
            </div>
            <div className="relative bg-gray-100 menu-content">
              <DashboardElements auth={auth} usersList={usersList} currentwebSocket={setwebSocketHost} />
            </div>
          </div>
        </div>

      </AuthenticatedLayout>

      <div className="fixed bottom-4 right-4"
        onClick={handlewebSocket}
      >
        {!WebSocketOn ? (<>
          <span className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-full hover:bg-blue-600 inline-block">
            <span className='websocket'></span>
            <span>pokeWebSocket</span>
          </span>
        </>) : (<>
          <span className="bg-green-500 cursor-pointer dispp text-white px-4 py-2 rounded-full hover:bg-blue-600 inline-block">
          <span className='websocket'>ws://{webSocketHost}</span>
          <span>WebSocket-ON</span>
          </span>
        </>)}
      </div>
      <style>
        {` 
        .websocket{
          display:none;
          padding:20px;
          width: 15rem;
          height: 4rem;
          bottom:3rem;
          right: 10%;
          color:black;
        }
        .dispp:hover .websocket{
          display:block;
          position:absolute;
          border-radius:0.3rem;
          background-color: white;
         
        }
          `}
      </style>
    </>
  );
}
