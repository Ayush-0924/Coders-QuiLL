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
  profilePicture: {
    type: String,
    default: 'https:www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F1152482%2Favatar_myself_people_profile_username_icon&psig=AOvVaw35XxjTT5Gz69KHSQaB7TfU&ust=1716562011543000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIiNnvqBpIYDFQAAAAAdAAAAABAE',
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
},{timestamps: true } 
// by adding timestamps mongodb will automatically save two 
// data(because two data are required to login so two data will be saved)
);

const User = mongoose.model('User',userschema);

export default User;