// resources/js/Components/Dashboard/NotificationCenter.jsx
import React, { useEffect, useState } from 'react';

const NotificationCenter = ({ notifications }) => {
  const [notify,setNotify]=useState(true);
  const makeNotify=()=>{
    if (Notification.permission === 'granted') {
      if(notify)
      new Notification(notifications.someSocket);
      setNotify(!notify)
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification(notifications.someSocket);
      }
    });
  }
  }
  return (
    <>
     <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
        <div className='relative flex'>
        <h2 className="text-lg font-semibold mb-2">Notification Center</h2>
        <span className='bg-gray-300 ml-12 bott rounded-full'>
           <span 
           onClick={makeNotify}
           className='hand rounded-full'>
          
            </span>
        </span>
       
        </div>
       
    </div> 
    <style>
         { `
            .bott{
              display:block;
              width:50px;
              height:25px;
            }
            .hand{
              display:block;
              width:25px;
              height:25px;
              background-color:dimgray;
            }
            .bott:hover .hand{
              animation: slide 500ms ease 1 forwards;
            }

            @keyframes slide{
              from{
                background-color:dimgray;
                width:25px;
                height:25px;
              }
              to{
                background-color:#00abff;
                width:100%;
                height:25px;
              }
            }
          `}
      </style>
    </>
   
  );
};

export default NotificationCenter;
