import React, { useEffect, useRef, useState } from "react";
import { json } from "react-router-dom";

const Preview = () => {

    const deviceRef = useRef(false);
    const [deviceArr,setDevicesArr] = useState([]);

    const [unityTracking, setUnityTracking] = useState(false);
    const messageRef = useRef();
    const messageArr = useRef([]);
    const soket = new WebSocket('ws://127.0.0.1:3004');
    soket.addEventListener('open', (evnt) => {
        soket.send(JSON.stringify({ type: 'preview', data: 'preview mod on' }))
    })

    const [trackChanges, setTrackChanges] = useState(false);

    const messageType = useRef();
    const DvTrak = useRef();
    useEffect(() => {
        soket.addEventListener('message', (evnt) => {
            messageRef.current = evnt.data;
            const messageRaw = JSON.parse(messageRef.current);
            messageType.current = messageRaw.message;
            try {
                if (messageType.current.message === "deviceTracking") {
                    console.log('unity on')
                    setUnityTracking(true);
                    messageArr.current = messageType.current.devicesSp;
                }
                if (messageType.current === "disconnected") {
                    console.log('unity OFF')
                    setUnityTracking(false);
                }
                if (messageType.current.type === "deviceMoving") {
                    DvTrak.current=messageType.current;
                    const dvInfo = JSON.parse(messageType.current.data);
                    DvTrak.current=dvInfo;
                    setDevicesArr(DvTrak.current);
                    console.log(DvTrak.current)
                }
            } catch (error) {
                return;
            }
        })
    }, [])

    const instantiatePlaces = (arr) => {
        const placeSP = document.querySelector('.place');
        placeSP.innerHTML = '';
        setDevicesArr([]);
        arr.forEach((element, index) => {
            const place = document.createElement('span');
            place.setAttribute('title', "Device:" + element.name);
            const color = "rgb(" + (225 - element.position[0].x) + "," + (225 - element.position[1].y) + "," + (225 - element.position[2].z) + ")";

            place.classList.add('placement');
            const vector3 = {
                position: {
                    x: element.position[0].x,
                    y: element.position[1].y,
                    z: element.position[2].z,
                }
            };
            place.setAttribute('style', "right:" + (25 - vector3.position.x * 10) +
                "rem; top:" + (20 - vector3.position.z * 10) + "rem; background:" + color + ";");
                setDevicesArr((prevArr) => [...prevArr, place]);             
                placeSP.append(place);
        });
    };


    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching or parsing JSON:', error);
            throw error;
        }
    };

    const instantiatePlaces2 = async () => {
        const jsonUrl = '../spawn.json';
        setUnityTracking(false);
        setDevicesArr([]);
        console.log('retrive from json')
        try {
            const data = await fetchData(jsonUrl);
            const placeSP = document.querySelector('.place');
            placeSP.innerHTML = '';
            deviceRef.current = data.devicesSp;
            setTrackChanges(data.devicesSp);
            data.devicesSp.forEach((element, index) => {
                const place = document.createElement('span');
                const vector3 = {
                    position: {
                        x: element.position[0].x,
                        y: element.position[1].y,
                        z: element.position[2].z,
                    }
                };
                place.setAttribute('value', JSON.stringify({data:vector3}));
                place.setAttribute('title', 'Device:' + element.name);
                const color = "rgb(" + (225 - element.position[0].x) + "," + (225 - element.position[1].y) + "," + (225 - element.position[2].z) + ")";
                place.classList.add('placement');
              
              

                place.setAttribute('style', "right:" + (25 - vector3.position.x * 10) +
                    "rem; top:" + (20 - vector3.position.z * 10) + "rem; background:" + color + ";");
                placeSP.append(place);
            });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (!unityTracking) {
            instantiatePlaces2();
        } else {
            instantiatePlaces(messageArr.current);
            console.log(messageArr.current)
        }
    }, [unityTracking])

    return (<>
        <h1>Devices Placemnt:</h1>

            {deviceArr.length > 0 && (<>
            {console.log(deviceArr)}
            </>)}
        {DvTrak.current &&
            <ul>
                <li>distance:{DvTrak.current.distance} name:{DvTrak.current.device}</li>
            </ul>}
        {unityTracking ? (<>

            <h2>Retrive from Unity Live Client</h2>
          
            <ul>
                {messageArr.current.map((element, index) => (
                    <li key={index}>{`ID:${index} position: Vector3 (x:${element.position[0].x},y:${element.position[1].y},z:${element.position[2].z})`}</li>
                ))}
            </ul>
        </>) : (<>
            {deviceRef.current ? (<>
                <h2>Retrive from json Generated file</h2>
                {deviceRef.current && (
                    <ul>
                        {deviceRef.current.map((element, index) => (
                            <li key={index}>{`ID:${index} position: Vector3 (x:${element.position[0].x},y:${element.position[1].y},z:${element.position[2].z})`}</li>
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