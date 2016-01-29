'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {type: String},
  password: {type: String},
  name: {type: String},
  location: {type: String}
});

const User = mongoose.model('User', userSchema);

module.exports = {
  find (email, callback) {
    User.find({email: email}, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  add (email, password, name, location, callback) {
    console.log('Inside addUser in Users');
    const user = new User({
      email: email,
      password: password,
      name: name,
      locaiton: location
    });

    user.save((err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  update (id, properties, callback) {
    User.findById(id, (err, result) => {
      if(err) throw err;
      if(!result) {
        callback({message: "User with " + id + " not found"});
      }
      result.email = properties[0] || result.email;
      result.password = properties[1] || result.password;
      result.name = properties[2] || result.name;
      result.locaiton = properties[3] || result.location;

      result.save((err) => {
        if(err) throw err;
        callback({
          message: "Successfully updated user",
          data: result
        });
      });
    });
  },
  remove (id, callback) {
    User.findOneAndRemove({_id: id}, (err, result) => {
      if(err) throw err;
      callback({
        message: "Successfully deleted user",
        data: result
      });
    });
  }
};
