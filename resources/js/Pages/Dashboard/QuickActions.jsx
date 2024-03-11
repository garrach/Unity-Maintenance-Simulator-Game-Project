// resources/js/Components/Dashboard/QuickActions.jsx
import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Navigation from '../Navigation';
import { clientSocket ,TMD} from '../client.cjs';


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
    <div className="bg-white dark:bg-transparent p-4 rounded-md shadow-md w-full"> 
     {auth.user.role==='admin' ? (<>
      <div className='relative float-right p-4 flex justify-around w-auto'>
        <Link href={route('reports.index')} className=' p-4 ml-4 hover:bg-orange-500  rounded-md text-center block '>
        Reports:{requests.reports}
        </Link>
        <Link href={route('application-list')} className=' p-4 ml-4 hover:bg-orange-500  rounded-md text-center block '>
        Job Request:{requests.requestJob}
        </Link>
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
      <Link href={route('services.create')}>Create new Plan</Link></button>
      <button className="bg-green-500 text-white ml-2 px-4 py-2 rounded-full hover:bg-green-600">
      <Link href='/connected-services'>Connections</Link></button>
     
          </>
        ):(<>
        
        <button className="bg-blue-500 text-white uppercase ml-2 px-4 py-2 rounded-full hover:bg-blue-600">
      <Link href='/devices'>request device</Link></button>
      <button className="bg-green-500 text-white uppercase ml-2 px-4 py-2 rounded-full hover:bg-green-600">
      <Link href={route('priority-customer-support')}>Apply for job</Link></button>
        </>)
        }
        {auth.user.role==='admin' || auth.user.role==='employee'  ? (<><Navigation/></>):(<></>)}
       
      </div>
      
    </div>
  );
};

export default QuickActions;
