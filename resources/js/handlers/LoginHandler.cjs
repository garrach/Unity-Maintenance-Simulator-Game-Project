const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');



const authlogin = new mongoose.Schema({
  username:String,
  email: String,
  password: String,
  role:String,
});

const Auth = mongoose.model('users', authlogin);

async function handleLogin(res,data,db) {

    const regUsers=db.collection('users').find().toArray();
    if ((await regUsers).length>0) {
      res.json({users:regUsers});
    }else{
      const newUser= new Auth({username:data.username,email:data.email,password:data.password});
      await newUser.save();
      res.json({users:'go ahead ure in.. as new memeber'});
    }
   
  }
  
  module.exports = {
    handleLogin,
    Auth,
  };
  