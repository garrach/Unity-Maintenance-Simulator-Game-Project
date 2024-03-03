
// Middleware to check the API key
const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['api-key'];
  
    // Replace 'YOUR_SECRET_API_KEY' with your actual API key
    if (apiKey && apiKey === 'YOUR_SECRET_API_KEY') {
      next(); // API key is valid, proceed to the next middleware or route handler
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  module.exports = { checkApiKey };