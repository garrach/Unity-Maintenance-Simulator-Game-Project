// resources/js/Components/Dashboard/SystemStatus.jsx
import React, { useEffect, useRef, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { clientSocket } from '../client.cjs';
import { useDynamicContext } from '../DynamicContext';

const UnityStatus = ({ webSocket ,auth}) => {
    const [unity,setUnity]=useState();
    const messageRef=useRef();
    useEffect(()=>{
        
        webSocket.addEventListener('message',(message)=>{
            try {
                const data= JSON.parse(message.data);
                try {
                   if(data.type==="broadcast" && data.message ==="unitylogin infos"){
                       console.log('Recive : ',data);
                        setUnity(data.data);
                        messageRef.current=data.data;
                   }
                   if(data.type==="disconnected" && data.data ===  messageRef.current){
                    console.log('Recive : ',data);
                     setUnity(null);
                }
                } catch (error) {
                    console.log('Error:', {error:'Message not from unity..'})   
                }

            } catch (error) {
                console.log('Error:', {error:'Message Parsing faild..'})
            }
        })
    },[])
  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-md shadow-md h-full w-full block relative flex flex-col justify-center text-center">
        {unity ? <><h2 className='dark:text-gray-200 uppercase'>Unity ON</h2></>:<h2 className='dark:text-gray-200 uppercase'>Unity NO Signal</h2>}
    </div>
  );
};

export default UnityStatus;
