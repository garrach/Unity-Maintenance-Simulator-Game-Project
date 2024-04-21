import { clientSocket } from '../client.cjs';

const moveObject=(place,soket)=>{

var isDragging = false;
var offset = { x: 0, y: 0 };
var lastPos = { x: 0, y: 0 };
var spann = place;

function startDragging(e) {
    isDragging = true;
    offset.x = e.clientX - spann.getBoundingClientRect().left;
    offset.y = e.clientY - spann.getBoundingClientRect().top;
    spann.addEventListener('mousemove', handleMouseMove);
    spann.addEventListener('mouseup', (e)=>{stopDragging(e)});
    spann.style.cursor = 'grabbing';
}

function handleMouseMove(e) {
    if (isDragging) {
        spann.style.left = e.clientX - offset.x + 'px';
        spann.style.top = e.clientY - offset.y + 'px';
        const cords={
            position:{
                x:e.clientX - offset.x,
                y:e.clientY - offset.y
            }
        }
        lastPos.x=cords.position.x;
        lastPos.y=cords.position.y;
    }
}

function stopDragging(e) {
    isDragging = false;
    const unityScale = 1500;

    // Convert the element's position from pixels to a percentage of the screen width and height
    const normalizedX = ((lastPos.x) / unityScale) *10;
    const normalizedY = ((lastPos.y) / unityScale) *10;

    // Construct the message with normalized coordinates
    const data = {
        position: {
            x: normalizedX,
            y: normalizedY
        }
    };

    // Send the message via WebSocket
    soket.send(JSON.stringify({
        type: 'movingPart',
        message: e.target.getAttribute('title'),
        data: data
    }));

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', stopDragging);
    spann.style.cursor = 'grab';
}
spann.addEventListener('mousedown', (eve) => {
    startDragging(eve);
})
}

export {moveObject};