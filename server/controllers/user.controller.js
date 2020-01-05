const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const fs = require("fs");

module.exports.createUser = (req,res) => {
    let user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.userName = req.body.userName;
    user.email = req.body.email;
    bcrypt.hash(req.body.password, 5)
      .then(hashed => {
        user.password = hashed;
        user.save()
          .then(newUser => {
            
            res.json(newUser);
          })
          .catch(err => res.json(err));
      })  
      .catch(err => res.json(err));
};

module.exports.getUser = (req,res) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.json(user))
        .catch(err => res.json(err));
};

module.exports.getAllUsersBut = (req,res) => {
  User.find({_id: {$ne: req.params.id}})
    .then(users => res.json(users))
    .catch(err => res.json(err));
}

module.exports.login = (req,res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
          bcrypt.compare(req.body.password, user.password)
                .then(result => {
                  if (result) {
                    res.json(user);
                  } else {
                    res.json({check: result});
                  }
                })
                .catch(err => res.json(err));
        })
        .catch(err => {
          res.json( {email_err: "User does not exist."})
        });
};

module.exports.checkPassword = (req,res) => {
  bcrypt.compare(req.body.entered, req.body.pw)
                .then(result => res.json({check: result}))
                .catch(err => res.json({pw: err}));
}

module.exports.checkEmail = (req,res) => {
    User.find({ email: req.body.email })
        .then(email => res.json({email_err: 'User with this email already exist.'}))
        .catch(err => res.json({check: 'new'}));
};

module.exports.checkUsername = (req,res) => {
    User.find({ username: req.body.username })
        .then(username => res.json({username_err: 'This username is already in use'}))
        .catch(err => res.json({check: 'new'}));
};

