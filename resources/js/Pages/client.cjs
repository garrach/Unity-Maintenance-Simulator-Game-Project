
const clientSocket=()=>{
const socket = new WebSocket('ws://localhost:3004');
socket.addEventListener('open', () => {
  console.log('Connected to WebSocket server');
  socket.send(JSON.stringify({type:'poke',data:'Api WebClient'}));
});

socket.addEventListener('message', (event) => {
});

socket.addEventListener('close', () => {
  console.log('Connection closed');
});

socket.addEventListener('error', (error) => {
  console.error('WebSocket error:', error.message);
});
return socket;
}
export { clientSocket };
