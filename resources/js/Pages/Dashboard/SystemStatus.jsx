// resources/js/Components/Dashboard/SystemStatus.jsx
import React, { useEffect, useRef, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { clientSocket } from '../client.cjs';
import { useDynamicContext } from '../DynamicContext';

const SystemStatus = ({ currentWebSocket, display }) => {
  const { dynamicValues, updateValues } = useDynamicContext();
  currentWebSocket=dynamicValues.socket;
  const [webSocketLive, setwebSocketLive] = useState(null);
  const message = useRef(false);
  const [sys, setSys] = useState();
  const { props } = usePage();

  const handlUnityRuntime=()=>{
    const unityMsg=display.message.message;
    if(unityMsg=="deviceTracking"){
      message.current=true;
      setSys('unity ON');
      console.log('unity ON')
    }else if(unityMsg=="disconnected"){
      message.current=false;
      console.log('unity shut')
      setSys('unity shut');
    }else{
      //setSys(display.message.message);
    }
    
    return message.current;
  }
  useEffect(()=>{
    handlUnityRuntime();
  },[display.message])
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
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
