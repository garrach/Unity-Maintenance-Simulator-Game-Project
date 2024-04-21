import React, { useEffect, useRef, useState } from "react";
import { socketHandler } from './clientSocket.cjs';
import { instantiatePlaces2, instantiatePlaces } from './loadData.cjs';
import { Head, Link, useForm } from '@inertiajs/react';
const Preview = () => {
    const { data, setData, post } = useForm();
    const deviceRef = useRef(false);
    const [deviceArr, setDevicesArr] = useState([]);
    const [unityTracking, setUnityTracking] = useState(false);
    const messageRef = useRef();
    const messageArr = useRef([]);
    const moveingArr = useRef([]);
    const [moveingTest, setMoveingTest] = useState('yo');
    const messageType = useRef();
    const DvTrak = useRef();
    const socket = useRef();
    async function loadDataX() {
        if (!unityTracking) {
            deviceRef.current = await instantiatePlaces2(socket.current);
            setDevicesArr(deviceRef.current)
            moveingArr.current = deviceRef.current.elements;
            //console.log(deviceRef.current)
        } else {
            instantiatePlaces(messageArr.current, socket.current);
        }
    }
    useEffect(() => {
        socket.current = socketHandler();
    }, [])
    async function movingListener(e, devicesList) {
        e.preventDefault();
        const databasearr = {
            data: [],
        }
        devicesList.forEach(element => {
            let pos = element.getAttribute('value');
            pos = JSON.parse(pos);
            databasearr.data.push(pos.data);
        });
        post(route('unity.move', databasearr))
        databasearr.data = [];
    }
    useEffect(() => {
        loadDataX(socket)
    }, [unityTracking])
    return (<>
      <div className="place">
        </div>
        <h1 className="text-white dark:text-white">Devices Placemnt:</h1>
        {unityTracking ? (<>
            <h2>Retrive from Unity Live Client</h2>
            <ul>
                {messageArr.current.map((element, index) => (
                    <li key={index}>{`ID:${index} position: Vector3 (x: ${element.position.x}, y: ${element.position.y}, z: ${element.position.z})`}</li>
                ))}
            </ul>
        </>) : (<>
            {deviceRef.current ? (<div className="text-white dark:text-white w-fit z-10 fixed">
            <button className="p-4 bg-gray-300" onClick={(e) => (movingListener(e, moveingArr.current))}>Snyc positions</button>
                <h2>Retrive from json Generated file</h2>
                {deviceRef.current && (
                    <ul>
                        {deviceRef.current.arr.map((element, index) => (
                            <li id={index} title={element.name} className="p-2 mb-4 hover:bg-orange-500 w-fit cursor-pointer" key={index}>{`ID:${index} position: Vector3 (x: ${element.position.x}, y: ${element.position.y}, z: ${element.position.z})`}</li>
                        ))}
                    </ul>)}
            </div>) : (<>
                <h2>Retrive from Unity Live Client, jsonFail</h2>
            </>)}
        </>)}
      
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
            .place {
                position:fixed;
                top:0;
                z-index:1;
                width: 100%; /* Adjust width as needed */
                height: 100vh; /* Adjust height as needed */
                background-image: linear-gradient(rgba(0,0,0,0) 1px, black 1px),
                                  linear-gradient(90deg, rgba(0,0,0,0) 1px, black 1px);
                background-size: 20px 20px; /* Adjust grid dimensions */
              }
            `}
        </style>
    </>)
}
export default Preview