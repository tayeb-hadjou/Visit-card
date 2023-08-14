const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: Number,
  company: String,
});
module.exports=UserSchema;
const dbConnection=require('../db/dbClient.js');
const User = dbConnection.model('User', UserSchema);
module.exports = User;