import { clientSocket } from '../client.cjs';

const MxlastPos = { data: { x: 0, y: 0 } };
const MxNextPos = { data: { x: 0, y: 0 } };
let lastPos = { x: 0, y: 0 };

const moveObject = (place, socket,user) => {
    let isDragging = false;
    let offset = { x: 0, y: 0 };
    const spann = place;
    MxNextPos.data = MxlastPos.data;


    async function startDragging(e) {
        isDragging = true;
        offset.x = e.clientX - spann.getBoundingClientRect().x;
        offset.y = e.clientY - spann.getBoundingClientRect().y;
        spann.style.cursor = 'grabbing';

        lastPos.x = spann.getBoundingClientRect().x;
        lastPos.y = spann.getBoundingClientRect().y;

        // Normalize and update MxlastPos with the initial position
        await normalizeAndSendPosition();

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', stopDragging);
        MxNextPos.data = MxlastPos.data;
    }

    async function handleMouseMove(e) {
        if (isDragging) {
            spann.style.left = e.clientX - offset.x + 'px';
            spann.style.top = (e.clientY - offset.y - 130) + 'px';
            // Update lastPos
            lastPos.x = e.clientX - offset.x;
            lastPos.y = e.clientY - offset.y;
            // Normalize and send position
            await normalizeAndSendPosition();


          
            
            console.log(MxNextPos.data.x - MxlastPos.data.x)
        }
    }

    async function normalizeAndSendPosition() {
        // Convert the element's position from pixels to a percentage of the screen width and height
        const normalizedX = lastPos.x / 2 / 10;
        const normalizedY = (lastPos.y / 2 / 10) - 7;

        // Construct the message with normalized coordinates
        const data = {
            position: {
                x: Math.floor(normalizedX),
                y: Math.floor(normalizedY)
            }
        };
        MxlastPos.data = { ...data.position }; // Update MxlastPos with new data
    }

    function stopDragging(e) {
        isDragging = false;
        spann.style.cursor = 'grab';
        
        // Update lastPos
        lastPos.x = spann.getBoundingClientRect().x;
        lastPos.y = spann.getBoundingClientRect().y;
        
        // Normalize and send position
        normalizeAndSendPosition();
        
        
        
        socket.send(JSON.stringify({
            type: 'movingPart',
            message: spann.getAttribute('title'),
            data: {
                user_id:user,
                position: {
                    x: Math.floor(MxNextPos.data.x - MxlastPos.data.x),
                    y: Math.floor(MxNextPos.data.y - MxlastPos.data.y)
                }
            }
        }));
        
        MxNextPos.data = MxlastPos.data;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', stopDragging);
    }

    spann.addEventListener('mousedown', startDragging);
};

export { moveObject, MxlastPos };
