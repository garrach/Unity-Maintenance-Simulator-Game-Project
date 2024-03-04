import { clientSocket } from '../client.cjs';

const moveObject=(place,soket)=>{

var isDragging = false;
var offset = { x: 0, y: 0 };
var spann = place;

function startDragging(e) {
    isDragging = true;
    offset.x = e.clientX - spann.getBoundingClientRect().left;
    offset.y = e.clientY - spann.getBoundingClientRect().top;
    spann.addEventListener('mousemove', handleMouseMove);
    spann.addEventListener('mouseup', stopDragging);
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
        soket.send(JSON.stringify({type:'movingPart',message:e.target.getAttribute('title'),data:cords}))
    }
}

function stopDragging() {
    isDragging = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', stopDragging);
    spann.style.cursor = 'grab';
}
spann.addEventListener('mousedown', (eve) => {
    startDragging(eve);
})
}

export {moveObject};