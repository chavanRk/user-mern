const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  city: {
    type: String
  },
  country: {
    type: String
  },
  state: {
    type: String
  },
  address: {
    type: String
  },
  zipCode: {
    type: String
  }
});

const userSchema = new mongoose.Schema({
  avatar: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  gender: {
    type: String
  },
  phone: {
    type: String
  },
  about: {
    type: String
  },
  age: {
    type: Number
  },
  color: {
    type: String
  },
  location: locationSchema // <-- adding the location sub-document schema
});

const data = mongoose.model('User', userSchema);

module.exports = data;


// const mongoose = require('mongoose');

// const schema = new mongoose.Schema({
//     avatar : {
//         type: String
//     },
//     username : {
//         type: String
//     },
//     password : {
//         type: String
//     },
//     email : {
//         type: String
//     },
//     gender : {
//         type: String
//     },
//     phone : {
//         type: String
//     },
//     about : {
//         type: String
//     },
//     age : {
//         type: Number
//     },
//     color : {
//         type: String
//     }
// });

// const data = mongoose.model('crud-app-users', schema);

// module.exports = data;
