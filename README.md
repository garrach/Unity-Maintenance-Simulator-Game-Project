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
Create a file named `server.js` and add the following code:

```javascript
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

Start the server by running:
```bash
node server.js
```

### 2. Configuring Unity to Send HTTP Requests

#### Step 1: Create a C# script in Unity
Create a script named `DataSender.cs` and add the following code:

```csharp
using UnityEngine;
using UnityEngine.Networking;
using System.Collections;

public class DataSender : MonoBehaviour
{
    void Start()
    {
        StartCoroutine(SendData());
    }

    IEnumerator SendData()
    {
        string json = "{\"message\": \"Hello from Unity\"}";

        UnityWebRequest request = new UnityWebRequest("http://localhost:3000/data", "POST");
        byte[] bodyRaw = new System.Text.UTF8Encoding().GetBytes(json);
        request.uploadHandler = new UploadHandlerRaw(bodyRaw);
        request.downloadHandler = new DownloadHandlerBuffer();
        request.SetRequestHeader("Content-Type", "application/json");

        yield return request.SendWebRequest();

        if (request.result == UnityWebRequest.Result.ConnectionError || request.result == UnityWebRequest.Result.ProtocolError)
        {
            Debug.LogError(request.error);
        }
        else
        {
            Debug.Log("Data sent successfully: " + request.downloadHandler.text);
        }
    }
}
```

Attach the `DataSender` script to a GameObject in your Unity scene and run the game to test the data sending functionality.

### 3. Creating the Web App to Interact with the Server

#### Step 1: Create an HTML file
Create a file named `index.html` with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web App</title>
</head>
<body>
    <h1>Web App</h1>
    <button id="sendDataBtn">Send Data</button>

    <script>
        document.getElementById('sendDataBtn').addEventListener('click', async () => {
            const response = await fetch('http://localhost:3000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: 'Hello from Web App' })
            });
            const data = await response.text();
            console.log(data);
        });
    </script>
</body>
</html>
```

Open `index.html` in a browser and click the "Send Data" button to send data to the server.

## Conclusion
With these steps, you have set up a basic communication system between a Unity game, a web application, and an Express.js server. This setup can be extended to support more complex interactions and data exchanges as needed.
