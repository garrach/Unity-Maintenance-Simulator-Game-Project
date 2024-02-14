const { MongoClient } = require('mongodb');

async function connectToDatabase(uri) {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to the database');
    return client.db();
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = {
  connectToDatabase,
};
