# Client-Server Interaction Overview

## Server Side

### Technologies Used
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing data.
- **WebSocket**: For real-time communication between the server and clients.

### Server Initialization
1. **Express Setup**: Create an Express app, set up middleware (CORS, JSON parser), and define API endpoints.
    ```javascript
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const http = require('http');
    const WebSocket = require('ws');
    ```

2. **WebSocket Server**: Implement a WebSocket server using the `ws` library for real-time bidirectional communication.
    ```javascript
    const server = http.createServer(app);
    const wss = new WebSocket.Server({ server });
    ```

3. **MongoDB Connection**: Connect to MongoDB to store and retrieve data.
    ```javascript
    mongoose.connect('mongodb://localhost:27017/backupplan', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    ```

### WebSocket Handling
- **Connection Management**: Track and manage WebSocket connections, logging client information.
- **Message Handling**: Receive and process messages from clients, broadcasting data to all connected clients.

### API Endpoints
- Define various API endpoints for handling user, device, connection, and vehicle data.
- Implement functionality for adding, retrieving, and updating data.
    ```javascript
    app.get('/api/user', async (req, res) => {
      // ...
    });

    app.post('/api/devices', async (req, res) => {
      // ...
    });

    app.get('/api/vehicles', async (req, res) => {
      // ...
    });
    ```

### Security
- Implement API key checking middleware to ensure secure communication.
    ```javascript
    const { checkApiKey } = require('./middleware/ApikeyChecker.cjs');
    app.use(checkApiKey);
    ```

## Client Side

### Technologies Used
- **WebSocket**: For establishing a WebSocket connection with the server.

### Client Initialization
1. **WebSocket Connection**: Connect to the server's WebSocket using a custom key.
    ```javascript
    const socket = new WebSocket('ws://localhost:3004', [client], {
      headers: headers
    });
    ```

2. **Event Listeners**: Set up event listeners for handling open, message, close, and error events.
    ```javascript
    socket.addEventListener('open', () => {
      console.log('Connected to WebSocket server');
    });
    ```

### Message Handling
- **Message Object Creation**: Define a function for creating structured message objects.
- **Event Handling**: Process received messages and log them.
    ```javascript
    socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      console.log('Received message:', message);
    });
    ```

### Exported Functions
- **`clientSocket`**: Returns a WebSocket instance for client-server communication.
- **`TMD`**: Creates a structured message object with type, message, and data fields.
    ```javascript
    const clientSocket = (client) => {
      // ...
    };

    const TMD = ({ type, message, data }) => {
      // ...
    };

    export { clientSocket, TMD };
    ```
