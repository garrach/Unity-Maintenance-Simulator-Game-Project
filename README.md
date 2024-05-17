# Unity and Web App Communication via Express.js Server

## Introduction
This project demonstrates how to establish communication between a Unity game (C#) and a web application using an Express.js server. The Unity game sends data to the server, which can also receive data from a web app.

## Prerequisites
- Node.js installed
- Unity installed

## Setup

### 1. Setting Up the Express.js Server

#### Step 1: Create a new project and install Express.js
```bash
mkdir my-server
cd my-server
npm init -y
npm install express
```
#### Step 2: Configure the server
Create a file named server.js and add the following code:

```js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/data', (req, res) => {
    console.log(req.body);
    res.send('Data received');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```
