import axios from 'axios';
const sendToMongo = async ({data})=>{
    const apiEndpoint = 'http://127.0.0.1:3002/api/login';


    // Inertia POST success callback
    const headers = {
        'Content-Type': 'application/json',
        'api-key': 'YOUR_SECRET_API_KEY', // Replace with your actual API key
    };

    // Second Axios POST request
    axios.post(apiEndpoint, data, { headers })
        .then(response => {
            console.log('Success:', response.data);

        })
        .catch(error => {
            console.error('Error:', error.response.data);

        });


}
export {sendToMongo};