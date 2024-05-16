// resources/js/Components/Dashboard/QuickActions.jsx
import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Navigation from '../Navigation';
import { clientSocket, TMD } from '../client.cjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCoins } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt, faBriefcase, faClipboard, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faCar,
  faPencilAlt,
  faLink
} from '@fortawesome/free-solid-svg-icons';
// In your JSX:


const QuickActions = ({ auth, requests, userExp }) => {
  const sendRoleRequest = (e) => {
    e.preventDefault();
    const socket = clientSocket('dashdoard_sentRequest');
    socket.addEventListener('open', (evnt) => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'roleRequest', message: 'a request from client to admin, to grant role', data: auth.user }))
      }
    })

  }
  const reportIss = () => {

  }
  return (
    <div className="dark:bg-transparent p-4 rounded-md shadow-md w-full">
      {auth.user.role === 'admin' ? (<>
        <div className='relative float-right p-4 flex justify-around w-auto dark:text-white text-gray-800' id='pop'>
          <Link href={route('reports.index')} className=' p-4 ml-4 hover:bg-orange-500  rounded-md text-center block '>
            <FontAwesomeIcon icon={faClipboard} />
            <span className='ml-2'>{requests.reports}</span>

          </Link>
          <Link href={route('application-list')} className=' p-4 ml-4 hover:bg-orange-500  rounded-md text-center block '>
            <FontAwesomeIcon icon={faBriefcase} />
            <span className='ml-2'>{requests.requestJob}</span>


          </Link>
        </div>
      </>) : (<>

        <div className='flex right-0 w-full dark:text-white text-gray-800' id='pop'>
          <span className='w-full h-12 p-2'>
            <Link href='#' className='p-2 hover:bg-orange-500 rounded-md'>
              <FontAwesomeIcon icon={faCoins} />
              <span className='ml-2'>{userExp.coins}</span>


            </Link>
          </span>
          <span className='h-12 p-2'>
            <Link href='#' className='p-2 hover:bg-orange-500 rounded-md'>
              <FontAwesomeIcon icon={faStar} />
              <span className='ml-2'>{userExp.experience}</span>


            </Link>
          </span>
        </div>

      </>)}

      <h2 className="text-lg dark:text-white text-gray-800 font-semibold  mb-2" id='pop'>Quick Actions</h2>

      <div className='mt-20' id='pop'>
        {auth.user.role === 'admin' ? (
          <>
            <button className="bg-blue-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-blue-600">
              <Link href='/vehicles'>
                <FontAwesomeIcon icon={faCar} />
                <span className='ml-2'>Add Vehicle</span>


              </Link></button>

            <button className="bg-blue-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-blue-600">
              <Link href='/devices'>
                <FontAwesomeIcon icon={faCar} />
                <span className='ml-2'>Add Device</span>

              </Link></button>

            <button className="bg-blue-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-green-600">
              <Link href={route('services.create')}>
                <FontAwesomeIcon icon={faPencilAlt} />
                <span className='ml-2'>Create new Plan</span>


              </Link></button>
            <button className="bg-green-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-green-600">
              <Link href='/connected-services'>
                <FontAwesomeIcon icon={faLink} />
                <span className='ml-2'>Connections</span>
              </Link></button>

          </>
        ) : (<>

          <button className="bg-blue-500 text-white uppercase ml-2 px-4 py-2 rounded-full hover:bg-blue-600">
            <Link href='/devices'>
              <FontAwesomeIcon icon={faMobileAlt} />
              <span className='ml-2'>  request device</span>
            </Link>
          </button>
          <button className="bg-green-500 text-white uppercase ml-2 px-4 py-2 rounded-full hover:bg-green-600">
            <Link href={route('priority-customer-support')}>
              <FontAwesomeIcon icon={faBriefcase} />

              <span className='ml-2'>Apply for job</span>

            </Link>
          </button>
          <button className="bg-green-500 text-white uppercase ml-2 px-4 py-2 rounded-full hover:bg-green-600">
            <Link href={route('reports.create')}>
              <FontAwesomeIcon icon={faClipboard} />
              <span className='ml-2'>Report</span>


            </Link>
          </button>
        </>)
        }
        {auth.user.role === 'admin' || auth.user.role === 'employee' ? (<><Navigation /></>) : (<></>)}

      </div>

    </div>
  );
};

export default QuickActions;
