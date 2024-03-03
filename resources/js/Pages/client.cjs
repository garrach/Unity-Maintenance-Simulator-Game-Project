const clientSocket = (client) => {
  const customObject = { key: client };
  const headers = {
    client : JSON.stringify(customObject)
  };
  const socket = new WebSocket('ws://localhost:3004', [client], {
    headers: headers
  });

  socket.addEventListener('open', () => {
    console.log('Connected to WebSocket server');
  });

  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    console.log('Received message:', message);
  });

  socket.addEventListener('close', () => {
    console.log('Connection closed');
  });

  socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error.message);
  });

  return socket;
};

const TMD=({type,message,data})=>{

  const dataType={
      type:type,
      message:message,
      data:data,
  }
  return dataType;
}

export { clientSocket,TMD };