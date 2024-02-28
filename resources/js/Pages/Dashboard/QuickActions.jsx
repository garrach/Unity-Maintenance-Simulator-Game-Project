// resources/js/Components/Dashboard/QuickActions.jsx
import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Navigation from '../Navigation';
import { clientSocket } from '../client.cjs';

const QuickActions = ({auth,requests}) => {
  const sendRoleRequest=(e)=>{
    e.preventDefault();
    const socket=clientSocket('dashdoard_sentRequest');
    socket.addEventListener('open', (evnt) => {
      if (socket.readyState===WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'roleRequest',message:'a request from client to admin, to grant role', data: auth.user }))
      }
  })

  }
  const reportIss=()=>{
    
  }
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md"> 
     {auth.user.role==='admin' ? (<>
      <div className='clientEmployee-requests'>
        <span>{requests.reports}</span>
        <span >{requests.requestJob}</span>
        <span>{requests.notify}</span>
      </div>
     </>):(<>
     
      <div className='clientEmployee-requests flex flex-[2_2_0%]'>
      <form onSubmit={sendRoleRequest}>
        <button>report_issue</button>
      </form>
        <span>notify</span>
      </div>
     
     
     </>)}
    
      <h2 className="text-lg font-semibold  mb-2">Quick Actions</h2>
     
      <div className='mt-20'>
        {auth.user.role==='admin' ? (
          <>
      <button className="bg-blue-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-blue-600">
      <Link href='/vehicles'>Add Vehicle</Link></button>
      <button className="bg-blue-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-green-600">
      <Link href='/paymentPlans'>Create Plan</Link></button>
      <button className="bg-green-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-green-600">
      <Link href='/connections'>Connections</Link></button>
     
          </>
        ):(<>
        
        <button className="bg-blue-500 text-white uppercase ml-2 px-4 py-2 rounded-full hover:bg-blue-600">
      <Link href='/devices'>request device</Link></button>
      <button className="bg-blue-500 text-white uppercase ml-2 px-4 py-2 rounded-full hover:bg-green-600">
      <Link href={route('whishlist.index')}>whishlist</Link></button>
      <button className="bg-green-500 text-white uppercase ml-2 px-4 py-2 rounded-full hover:bg-green-600">
      <Link href={route('priority-customer-support')}>Apply for job</Link></button>
        </>)

        }
        {auth.user.role==='admin' || auth.user.role==='employee'  ? (<><Navigation/></>):(<></>)}
       
      </div>
      <style>
        {`
        .clientEmployee-requests{
          display:flex;
          justify-content:space-around;
          width:10%;
          position: absolute;
          right: 30%;
        }
        .clientEmployee-requests span{
          display:block;
          position:relative;
          padding:0.2rem;
          width:auto;
          height:auto;
          border-radius:0.2rem;
          background-color:red;
          text-align:center;
        }
       
        `}
      </style>
    </div>
  );
};

export default QuickActions;
