// resources/js/Components/Dashboard/SystemStatus.jsx
import React, { useEffect, useRef, useState } from 'react';
import { usePage,Link } from '@inertiajs/react';
import { clientSocket } from '../client.cjs';
import { useDynamicContext } from '../DynamicContext';

const UnityStatus = ({ webSocket ,auth}) => {
    const [unity,setUnity]=useState(null);
    const messageRef=useRef();
    useEffect(()=>{
    
        try {
            webSocket.send(JSON.stringify({type:"unityStat",message:"isUnity Running",data:auth}))
            webSocket.addEventListener('message',(message)=>{
                try {
                    const data= JSON.parse(message.data);
                    try {
                        if((data.type==="login" && data.message ==="unity instanceRunning")){
                            console.log('Recive : ',data);
                            setUnity(data.data.client);
                            messageRef.current=data.data;  
                   }
                   if(data.type==="auth"){
                    console.log('Recive : ',data);
                    setUnity(data.data.user._id);
                    messageRef.current=data.data;  

                }
                   if(data.type==="unityInstanceOff"){
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
        } catch (error) {
            return;
        }
      
    },[webSocket])
  return (
<Link href={route('dashboard')}>
    <div className="p-4 rounded-md shadow-md h-full w-full block relative flex flex-col justify-center text-center">
        {unity ? <><h2 className='dark:text-gray-200 uppercase'>Unity ON {unity._id || unity}</h2>
        <img src="unityrunning.gif" alt="unityGlitch" className='rounded-md' />
        </>:<><h2 className='dark:text-gray-200 uppercase'>Unity NO Signal</h2>
        <img src="unityGlitch.gif" alt="unityGlitch" className='rounded-md'/>
        </>}
    </div></Link>
  );
};

export default UnityStatus;
