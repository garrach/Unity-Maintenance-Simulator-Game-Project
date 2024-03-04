import { clientSocket } from '../client.cjs';


const socketHandler = () => {
    const soket = clientSocket('unityPreview');
    soket.addEventListener('open', (evnt) => {
        console.log('clientReady')
    })
    soket.addEventListener('message', (evnt) => {
        messageRef.current = evnt.data;
        const messageRaw = JSON.parse(messageRef.current);
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