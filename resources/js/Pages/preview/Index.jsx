import React, { useEffect, useRef, useState } from "react";
import { socketHandler } from './clientSocket.cjs';
import { instantiatePlaces2, instantiatePlaces } from './loadData.cjs';

const Preview = () => {

    const deviceRef = useRef(false);
    const [deviceArr, setDevicesArr] = useState([]);
    const [unityTracking, setUnityTracking] = useState(false);
    const messageRef = useRef();
    const messageArr = useRef([]);

    const messageType = useRef();
    const DvTrak = useRef();
    const socket=useRef();

    async function loadDataX(){
        if (!unityTracking) {
            deviceRef.current = await instantiatePlaces2(socket.current);
            setDevicesArr(deviceRef.current)
        } else {
            instantiatePlaces(messageArr.current,socket.current);
            console.log(messageArr.current)
        }
    }

    useEffect(() => {
        socket.current=socketHandler();
    }, [])

    useEffect( () => {
        
      loadDataX(socket)
    }, [unityTracking])

    return (<>
        <h1>Devices Placemnt:</h1>

       
      
        {unityTracking ? (<>

            <h2>Retrive from Unity Live Client</h2>

            <ul>
                {messageArr.current.map((element, index) => (
                    <li key={index}>{`ID:${index} position: Vector3 (x:${element.position.x},y:${element.position.y},z:${element.position.z})`}</li>
                ))}
            </ul>
        </>) : (<>
            {deviceRef.current ? (<>
                <h2>Retrive from json Generated file</h2>
                {deviceRef.current && (
                    <ul>
                        {deviceRef.current.map((element, index) => (
                            <li key={index}>{`ID:${index} position: Vector3 (x:${element.position.x},y:${element.position.y},z:${element.position.z})`}</li>
                        ))}
                    </ul>)}

            </>) : (<>
                <h2>Retrive from Unity Live Client, jsonFail</h2>
            </>)}

        </>)}


        <div className="place"></div>
        <style>
            {`
            .placement{
                position:absolute;
                display:block;
                width:4rem;
                height:4rem;
            }
            .placement:hover{
                background:red !important;
            }
            
            `}
        </style>
    </>)
}
export default Preview