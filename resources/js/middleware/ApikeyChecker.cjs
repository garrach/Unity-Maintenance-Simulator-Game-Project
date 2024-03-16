
// Middleware to check the API key
const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['api-key'];
  
    // Replace 'YOUR_SECRET_API_KEY' with your actual API key
    if (apiKey && apiKey === 'YOUR_SECRET_API_KEY') {
      next(); 
    } else {
      console.log(req)
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  module.exports = { checkApiKey };