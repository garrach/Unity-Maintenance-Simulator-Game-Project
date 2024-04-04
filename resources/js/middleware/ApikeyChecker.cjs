
// Middleware to check the API key
const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['api-key'];
  
    async function fetchUserKey() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/key');
        if (!response.ok) {
        }
        const data = await response.json();

        if (apiKey && apiKey === data.key) {
          next(); 
        } else {
          res.status(401).json({ error: 'Unauthorized' });
        }
     } catch (error) {
      res.status(401).json({ error: 'Unauthorized' });
     }
    }
   
    fetchUserKey();
   
  };
  module.exports = { checkApiKey };