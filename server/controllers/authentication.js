/* eslint-disable class-methods-use-this */
import bcrypt from 'bcrypt';


import createtoken from '../helpers/createtoken';

import { users } from '../models';
// const datetime = require('node-datetime');

// const id = 1;
// const dt = datetime.create();
// const formatted = dt.format('m/d/Y');

const saltRounds = 12;

class Usercontroller {
  list(req, res) {
    const { username } = req.body;
    const { password } = req.body;
    if (!username || !password) {
      return res.status(400).send({
        success: 'false',
        message: 'username and password is required',
      });
    }
    const matchedUser = users.findOne({
      where: { username: username },
    })
      .then(user => {
        if (!user) {
          const error = 'User does not exist';
          return res.status(404).json({
            message: error,
            status: 'error',
            error,
          });
        } else if (user) {
          bcrypt.compare(password, user.password)
            .then((validPassword) => {
              const ids = user.id;
              const token = createtoken(ids);
              if (validPassword) {
                res.status(200)
                  .header('Authorization', `${token}`)
                  .send({
                    success: 'true',
                    message: 'User logged in',
                    token,
                  });
              } else {
                res.status(200).send({
                  success: 'true',
                  message: 'password not correct',
                });
              }
            });
        }
      });
  }

  signUp(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      return res.status(400).send({
        success: 'false',
        message: 'username and password are required',
      });
    }

    const matchedUser = users.findOne({
      where: { username: username },
    })
    .then(user => {
        if (user) {
          const error = 'User exists already and signed in';
          return res.status(422).json({
            message: error,
            status: 'error',
          });
        } else if (!user) {
            bcrypt.hash(password, saltRounds)
            .then((hash) => {
             const newUser = users.create({username,password: hash})
            .then(newuser=>{
              const token = createtoken(newUser.id);
              let id = newuser.id;
              return res.status(201)
              .header('Authorization', `Bearer ${token}`)
              .send({
              message: 'User successfully created',
              newuser,
              token,
              status: 'success',
            });
          });
      });  
    }
  });
  }
}


const entrycontroller = new Usercontroller();
export default entrycontroller;
