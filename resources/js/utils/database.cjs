const mongoose = require('mongoose');
const mysql = require('mysql');

async function connectToDatabase(offline) {
  try {
if(!offline){
  const pass='studentTryTobackup';
  mongoose.connect(`mongodb+srv://student00:${pass}@cluster0.yg6pdkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize:3,
  });
}else{
  mongoose.connect(`mongodb://localhost:27017/backupplan`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize:3,

  });
}

    const db = mongoose.connection;
    await db;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });
    return db;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

async function connectToSqlDatabase(){
    try {
        // Create MySQL connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'carmaintain'
  });

  // Connect to MySQL
  connection.connect(err => {
    if (err) return;
    console.log('Connected to MySQL database');
  });
  return connection;


    } catch (error) {
        return;
    }

}


module.exports = {
  connectToDatabase,connectToSqlDatabase
};
