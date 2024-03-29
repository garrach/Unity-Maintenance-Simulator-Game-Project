const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const authlogin = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
  BD_id:Number,
});
const Auth = mongoose.model('users', authlogin);
async function handleLogin(res, data, db) {
  // Check if a user with the same email already exists
  const existingUser = await db.collection('users').findOne({ email: data.email });
  if (existingUser) {
    // Handle the case where the user already exists
    console.log({ error: 'User with the same email already exists' });
    return false;

  } else {
    // If the user does not exist, proceed to create and save the new user
    const newUser = new Auth({ BD_id:data.id, username: data.name, email: data.email, password: data.password });
    await newUser.save();
    console.log({ success: 'User registered successfully' }); 
    return true;
  }
}
const retriveUserByNameAndPass=()=>{};
module.exports = {
  handleLogin,
  retriveUserByNameAndPass,
  Auth,
};
