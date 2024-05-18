import axios from 'axios';
const {getDomain,setDomain,getDomainString}=require('../../DomainProvider.cjs')

const sendToMongo = async ({data})=>{
    const apiEndpoint = `http://${getDomainString()}/api/login`;


    // Inertia POST success callback
    const headers = {
        'Content-Type': 'application/json',
        'api-key': 'YOUR_SECRET_API_KEY', 
    };

    // Second Axios POST request
    axios.post(apiEndpoint, {data}, { headers })
        .then(response => {
            console.log('Success:', response.data);

        })
        .catch(error => {
            console.error('Error:', error.response.data);

        });
}
export {sendToMongo}; 