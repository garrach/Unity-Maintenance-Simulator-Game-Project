import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DashboardElements from './mainElements/DashboardElements';
import { useDynamicContext } from './DynamicContext';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserShield,
  faUserCircle,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import AlertDialog from '@/Components/AlertDialog';
import Sidebar from './sideBar';
import { useRef } from 'react';
import GuideComponent from '@/Components/GuideComponent';
import axios from 'axios';
import  getDomainString  from "@/Pages/DomainProviderFR.mjs";

export default function Dashboard({ auth, usersList, reports, requestJob, wishListItems, userExp }) {
  const headers = {
    'Content-Type': 'application/json',
    'api-key': 'YOUR_SECRET_API_KEY', 
};
useEffect(()=>{
  async function retriveUserKey(){
    await axios.post(`http://${getDomainString()}/api/get-key?ID=${auth.user.id}`,auth, { headers }).then((response)=>{
      //Done something with the key
    })
  }
  retriveUserKey();
},[])


  const [storedMenuState, setstoredMenuState] = useState(Cookies.get('Guide'));
  const [isAlertDialogOpen, setAlertDialogOpen] = useState(false);
  const [WebSocketOn, setWebSocketOn] = useState(false);
  const [webSocketHost, setwebSocketHost] = useState('');
  const [guideElemnt, setGuideElemnt] = useState(null);
  const [nextguideElemnt, setNextguideElemnt] = useState(0);
  const nextGuid = useRef(0);
  const [currentwebSocket, setcurrentwebSocket] = useState(null);
  const [requests, setrequests] = useState({
    reports: reports,
    requestJob: requestJob,
    wishListItems: wishListItems,
  });
  const { props } = usePage();
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
  const pnl = useRef();
  const [clientReq, setClientReq] = useState()
  useEffect(() => {
    handlewebSocket(false);
    return () => {
      handlewebSocket(false);
    }
  }, [])
  const skipping = (e, pops) => {
    e.preventDefault();
    try {
      if ((pops.length - 1 > nextGuid.current) && storedMenuState) {
        nextGuid.current++;
        setNextguideElemnt(nextGuid.current)
      } else {
        setstoredMenuState(0);
        Cookies.set('Guide', 0);
      }
    } catch (error) {
      nextGuid.current = 0;
    }
  }
  useEffect(() => {
    setstoredMenuState(Cookies.get('Guide'));
    return () => {
      setstoredMenuState(0);
    }
  }, [])
  const closeGuide = (e) => {
    e.preventDefault();
    setstoredMenuState(0);
    Cookies.set('Guide', 0);
  }
  useEffect(() => {
    setGuideElemnt(document.querySelectorAll('#pop'))
  }, [nextguideElemnt])
  const IconsByRole = ({ userRole }) => {
    switch (userRole) {
      case "admin":
        return <><FontAwesomeIcon icon={faUserShield} /><span className='ml-2 font-bold uppercase'>{userRole}</span></>
      case "client":
        return <><FontAwesomeIcon icon={faUserCircle} /><span className='ml-2 font-bold uppercase'>{userRole}</span></>
      case "employee":
        return <><FontAwesomeIcon icon={faUserTie} /><span className='ml-2 font-bold uppercase'>{userRole}</span></>
    }
  }
  return (
    <>
      <AuthenticatedLayout
        webSocket={currentwebSocket}
        user={auth.user}
        pannier={props.pannier}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" id='pop'>
          Dashboard - <IconsByRole userRole={auth.user.role} />

          {auth.user.role === "admin" && (<span className='flex w-56 m-2 justify-around p-2 hover:bg-orange-500 rounded-md'>
            <Link href={route('unityRefresh')}>Unity Refresh</Link>
          </span>)}
        </h2>}
      >
        <Head title="Dashboard" />
        {isAlertDialogOpen && (<AlertDialog title="WebSocket" message={messageObject.message} onClose={onClose} />)}
        <div className="py-0 bgstyleglass">
          {clientReq && (<AlertDialog title="Role Request" message='Request From Client' onClose={onClose} />)}
          <div ref={pnl} className={`flex ${auth.user.role === "client" ? "w-full" : ""}`}>
            {(auth.user.role === "admin" || auth.user.role === "employee") ? <div className="sm:flex side-menu">
              <div className="flex">
                <Sidebar auth={auth} expand={true} Children={
                  <ul>
                    <li className='text-gray-200 mt-4 hover:text-white'>
                      <Link href={route('paymentPlans.index')} id='pop'>Subscribe</Link>
                    </li>
                    <li className='text-gray-200 mt-4 hover:text-white'>
                      <Link href={route('users')} id='pop'>Users List</Link>
                    </li>
                  </ul>} />
              </div>
            </div> : (
              <div className="sm:flex side-menu">
                <div className="flex">
                  <Sidebar auth={auth} expand={true} />
                </div>
              </div>)}
            <div className="relative dark:bg-gray-900 bg-gray-300 menu-content">
              <DashboardElements requests={requests} auth={auth} usersList={usersList} webSocket={webSocket} currentwebSocket={setwebSocketHost} display={data} userExp={userExp} />
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
          <span className="bg-green-500 cursor-pointer dispp text-white px-4 py-2 rounded-full hover:bg-blue-600">
            <span className='websocket'>ws://{webSocketHost}</span>
            <span>WebSocket-ON</span>
          </span>
        </>)}
      </div>
      {guideElemnt && (storedMenuState != 0) && <GuideComponent guideElemnt={guideElemnt} nextGuid={nextGuid} storedMenuState={storedMenuState} closeGuide={closeGuide} skipping={skipping} />}
      <style>
        {` 
        .rounded-md{
          border-radius: 1.3rem !important;
        }
        @media (prefers-color-scheme: dark) {
          .bgstyleglass{
            background: rgb(0,23,69);
            background: linear-gradient(215deg, rgb(31, 41, 55) 21%, rgba(87, 52, 213, 0.52) 47%, rgb(31, 41, 55) 50%)   
          }
        }
        @media (prefers-color-scheme: light) {
          .bgstyleglass{
            background: rgb(0,23,69);
            background: linear-gradient(215deg, rgb(247, 247, 247) 21%, rgb(227, 227, 227) 47%, rgb(255, 255, 255) 50%)  
          }
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
