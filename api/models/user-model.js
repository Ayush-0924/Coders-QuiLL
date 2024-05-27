import mongoose from 'mongoose'

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
},{timestamps: true } 
// by adding timestamps mongodb will automatically save two 
// data(because two data are required to login so two data will be saved)
);

const User = mongoose.model('User',userschema);

export default User;