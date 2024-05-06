import { useRef } from 'react';
import { clientSocket } from '../client.cjs';


const socketHandler = () => {
    const messageType={
        current:{
            type:'',
            message:'',
            data:'',
        },
    }
    const soket = clientSocket('unityPreview');
    soket.addEventListener('open', (evnt) => {
    })
    soket.addEventListener('message', (evnt) => {
        const messageRaw = JSON.parse(evnt.data);
        messageType.current = messageRaw.message;
        try {
            if (messageType.current.message === "deviceTracking") {
            }
            if (messageType.current === "disconnected") {
            }
            if (messageType.current.type === "deviceMoving") {
            }
        } catch (error) {
            return;
        }
    })
    return soket;
}
export {socketHandler}