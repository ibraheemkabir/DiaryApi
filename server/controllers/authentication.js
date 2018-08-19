/* eslint-disable class-methods-use-this */
import bcrypt from 'bcrypt';

import pool from '../config/dbconfig';

import createtoken from '../helpers/createtoken';


// const datetime = require('node-datetime');

// const id = 1;
// const dt = datetime.create();
// const formatted = dt.format('m/d/Y');

const saltRounds = 12;

class Usercontroller {
  signIn(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      return res.status(400).send({
        success: 'false',
        message: 'username and password is required',
      });
    }

    pool.connect((err, client, done) => {
      if (err) return done(err);
      client.query(`SELECT * FROM users WHERE username='${username}'`, (error, response) => {
        done();
        if (error) {
          console.error('query error', error.message, error.stack);
        } else if (response.rowCount === 0) {
          res.status(200).send({
            success: 'false',
            message: 'user not found',
          });
        } else {
          bcrypt.compare(password, response.rows[0].password)
            .then((validPassword) => {
              if (validPassword) {
                const result = response.rows;
                const ids = response.rows[0].id;
                const token = createtoken(ids);
                res.status(200)
                  .header('Authorization', `token ${token}`)
                  .send({
                    success: 'true',
                    message: 'USER logged in',
                    result,
                    auth: true,
                    token,
                  });
                next();
              } else {
                res.status(200).send({
                  success: 'true',
                  message: 'password not correct',
                });
              }
            });
        }
      });
      return done();
    });
    return res;
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

    pool.connect((err, client, done) => {
      if (err) return done(err);
      client.query(`SELECT * FROM users WHERE username='${username}'`, (error, response) => {
        done();
        if (error) {
          console.error('query error', error.message, error.stack);
        } else if (response.rowCount === 1) {
          res.status(200).send({
            success: 'true',
            message: 'there is an account associated with that username already',
          });
        } else {
          bcrypt.hash(password, saltRounds)
            .then((hash) => {
              console.log(hash);
              client.query(`INSERT INTO USERS (username,password) VALUES ('${username}','${hash}')`, (error, response) => {
                if (error) {
                  console.error('query error', error.message, error.stack);
                } else {
                  res.status(200).send({
                    success: 'true',
                    message: 'User registered',
                    response,
                  });
                }
              });
            });
        }
      });
      return done();
    });
    return res;
  }
}


const entrycontroller = new Usercontroller();
export default entrycontroller;
