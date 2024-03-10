import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

import DashboardElements from './mainElements/DashboardElements';

import { useDynamicContext } from './DynamicContext';


import { useEffect, useState } from 'react';
import AlertDialog from '@/Components/AlertDialog';
import Sidebar from './sideBar';
export default function Dashboard({ auth, usersList, reports,requestJob }) {

  const [isAlertDialogOpen, setAlertDialogOpen] = useState(false);
  const [WebSocketOn, setWebSocketOn] = useState(false);
  const [webSocketHost, setwebSocketHost] = useState('');
  const [currentwebSocket, setcurrentwebSocket] = useState(null);
  const [requests, setrequests] = useState({
    reports: reports,
    requestJob: requestJob,
  });
  const [messageObject, setUserMessage] = useState({ type: 'head', message: 'Welcome, WebSocket to provide realtime data monitoring', data: '' });

  const {
    data,
    setData,
  } = useForm({
    currentwebSocket: WebSocketOn,
    planstate: 'planstate',
    message: '',
  });

  const onClose = () => {
    setAlertDialogOpen(!isAlertDialogOpen)
  }
  const makeJson = (stringJson) => {
    try {
      const objectData = JSON.parse(stringJson)
      return objectData;
    } catch (error) {
      return { message: 'Reloading..' }
    }
  }
  const { dynamicValues, updateValues } = useDynamicContext();
  const webSocket = dynamicValues.socket;
  webSocket.addEventListener('open', (event) => {
    updateValues({ dash: 'open' });

    setData({
      currentwebSocket: webSocket,
      planstate: 'planstate',
      message: makeJson(dynamicValues.dash),
    })
    webSocket.send(JSON.stringify({ type: "poke", message: 'reload', data: "client on " + auth.user.name }))
  })
  const handlewebSocket = (useaction) => {
    setcurrentwebSocket(webSocket)
    setWebSocketOn(true);
    if (useaction)
      setAlertDialogOpen(!isAlertDialogOpen)
    const host = new URL(webSocket.url).host;
    setwebSocketHost(host);

    webSocket.addEventListener('message', (msg) => {
      setData({
        currentwebSocket: webSocket,
        planstate: 'planstate',
        message: makeJson(msg.data),
      })
      let reqq = { type: '', message: '', data: '' };

      try {
        reqq = JSON.parse(msg);
        const { type, message, data } = reqq;
      } catch (error) {

      }
    })
  }
  useEffect(() => {
    handlewebSocket(false);
  }, [])
  const [clientReq, setClientReq] = useState()


  return (
    <>
      <AuthenticatedLayout
        webSocket={currentwebSocket}
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard - {auth.user.role}
          <span className='flex w-56 m-2 justify-around'><>
            <Link href={route('meeting.index')}>Meet</Link>
            <Link href={route('unityRefresh')}>unityRefresh</Link>
          </></span></h2>}
      >

        <Head title="Dashboard" />
        {isAlertDialogOpen && (<AlertDialog title="WebSocket" message={messageObject.message} onClose={onClose} />)}
        <div className="py-0">
          {clientReq && (<AlertDialog title="Role Request" message='Request From Client' onClose={onClose} />)}

          <div className='flex'>
            {(auth.user.role === "admin" || auth.user.role === "employee") && <div className="sm:flex side-menu dark:bg-gray-900">
              <div className="flex bg-gray-200">
                <Sidebar auth={auth} expand={false} Children={
                  <ul>
                    
                      <li className='text-gray-200 mt-4 hover:text-white'>                
                        <Link href={route('paymentPlans.index')}>Subscribe</Link>
                      </li>
                      <li className='text-gray-200 mt-4 hover:text-white'>                
                        <Link href={route('users')}>Users List</Link>
                      </li>
                    
                  </ul>} />
              </div>

            </div>}
            <div className="relative dark:bg-gray-900 bg-gray-300 menu-content">
              <DashboardElements requests={requests} auth={auth} usersList={usersList} currentwebSocket={setwebSocketHost} display={data} />
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
        .rounded-md{
          border-radius: 1.3rem !important;
        }
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
