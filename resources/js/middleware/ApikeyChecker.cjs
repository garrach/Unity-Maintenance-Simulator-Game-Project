// apiKeyMiddleware.cjs

const { connectToDatabase } = require('../utils/database.cjs');
const { getAPiKey } = require('../handlers/RetriveHandler.cjs');
const fetch = require('node-fetch');

// Function to fetch user API key from remote server
const fetchUserKey = async (apiKey) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/key');
    const data = await response.json();

    return data.key === apiKey;
  } catch (error) {
    console.error('Error fetching user key:', error);
    return false;
  }
};

// Middleware to check the API key
const checkApiKey = async (req, res, next) => {
  try {
    const db = await connectToDatabase(true); // Connect to the database
    const apiKey = req.headers['api-key'] || req.query.ID;

    if (!apiKey) {
      return res.status(401).json({ error: 'API Key is missing' });
    }

    const isRemoteKeyValid = await fetchUserKey(apiKey);
    if (isRemoteKeyValid) {
      return next();
    }

    const userKey = await getAPiKey(req.query.ID, db);
    if (userKey) {
      console.log('User key checked');
      return next();
    }

    res.status(401).json({ error: 'Unauthorized' });
  } catch (error) {
    console.error('Error checking API key:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { checkApiKey };
