// resources/js/Components/Dashboard/SystemStatus.jsx
import React, { useEffect, useRef, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { clientSocket } from '../client.cjs';
import { useDynamicContext } from '../DynamicContext';

const SystemStatus = ({ currentWebSocket, display }) => {
  const { dynamicValues, updateValues } = useDynamicContext();
  const [sys, setSys] = useState(false);
  const { props } = usePage();

  const handlUnityRuntime=()=>{
    dynamicValues.socket.send(JSON.stringify({type:'webClientIdentity',message:'webClient Socket on',data:display}))
  }
  useEffect(()=>{
   
    return()=>{
        handlUnityRuntime()
        console.log(dynamicValues.socket)
      setSys(true)
    }
  },[sys])
  return (
    <div className="dark:text-white text-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">System Status</h2>

      {(display.message) ? (<>

        <>{props.someSocket !== '' ? (<>

          <h1>Server Running.. {/*display.message.message*/}</h1>
          <h2>{sys}</h2>
          <h3>{display.message.message}</h3>
        </>) : (<>

          <h1>Server 0 Down..</h1>

        </>)}</>

      </>) : (<>

        <h1>Server 1 Down..</h1>
       
      </>)}


    </div>
  );
};

export default SystemStatus;
