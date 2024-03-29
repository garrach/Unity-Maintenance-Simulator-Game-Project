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
    useEffect(() => {
        const cords = {
            x: 0,
            y: 0
        }
        const newcords = {
            x: 0,
            y: 0
        }
        window.addEventListener('mouseup', (ent) => {
            if (ent.target.nodeName == "SPAN") {
                newcords.x = Math.abs(ent.clientX - cords.x);
                newcords.y = Math.abs(ent.clientY - cords.y);
                let pos = ent.target.getAttribute('value');
                pos = JSON.parse(pos);
                console.log(Number(pos.data.position.x) - (newcords.x * 0.01));
                console.log(Number(pos.data.position.x));
                setMoveingTest(`Device pos : ${Number(pos.data.position.x) / 10 + 25} : Moved${newcords.x * 0.01}`);
            }
        })
        window.addEventListener('mousedown', (ent) => {
            if (ent.target.nodeName == "SPAN") {
                let pos = ent.target.getAttribute('value');
                pos = JSON.parse(pos);
                //console.log(Number(pos.data.position.x));
                cords.x = ent.clientX;
                cords.y = ent.clientY;
                console.log(cords)
            }
        })
        return () => {
            window.removeEventListener('mousedown', () => { });
            window.removeEventListener('mouseup', () => { });
        }
    }, [])
    return (<>
        <h1>Devices Placemnt:</h1>
        <button className="p-4 bg-gray-300" onClick={(e) => (movingListener(e, moveingArr.current))}>Snyc positions</button>
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
                        {deviceRef.current.arr.map((element, index) => (
                            <li key={index}>{`ID:${index} position: Vector3 (x:${element.position.x},y:${element.position.y},z:${element.position.z})`}</li>
                        ))}
                    </ul>)}
            </>) : (<>
                <h2>Retrive from Unity Live Client, jsonFail</h2>
            </>)}
        </>)}
        <div className="place">
        </div>
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