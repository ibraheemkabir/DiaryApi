/* eslint-disable class-methods-use-this */
import pool from '../config/dbconfig';

const datetime = require('node-datetime');


const dt = datetime.create();
const formatted = dt.format('d/m/Y');

class Queries {
  addentry(req, res, next) {
    const { title } = req.body;
    const { content } = req.body;
    const date = formatted;
    const userid = req.userId;
    pool.connect((err, client, done) => {
      if (err) return done(err);
      client.query(`INSERT INTO entries (content, title, userid, "Date") VALUES ('${content}','${title}','${userid}','${date}')`, (error, response) => {
        if (error) {
          console.error('query error', error.message, error.stack);
        } else {
          res.status(200).send({
            success: 'true',
            message: 'entry added successfully',
            response,
          });
        }
        next();
      });
      return done();
    });
  }

  deleteentry(req, res, next) {
    const index = parseInt(req.params.id, 10);
    const userid = req.userId;
    pool.connect((err, client, done) => {
      if (err) return done(err);
      client.query(`DELETE FROM entries WHERE userid = '${userid}' AND id = '${index}'`, (error, response) => {
        if (error) {
          console.error('query error', error.message, error.stack);
        }
        if (response.rowCount === 0) {
          res.status(200).send({
            success: 'true',
            message: 'entry not found',
            response,
          });
          done();
        } else {
          res.status(200).send({
            success: 'true',
            message: 'entry deleted successfully',
            response,
          });
          next();
        }
      });
      return done();
    });
  }

  allentries(req, res, next) {
    const { userId } = req;
    pool.connect((err, client, done) => {
      if (err) return done(err);
      client.query(`SELECT * FROM entries WHERE userid = '${userId}'`, (error, response) => {
        if (error) {
          console.error('query error', error.message, error.stack);
        }
        const result = response.rows;
        res.status(200).send({
          success: 'true',
          message: 'entries retrieved successfully',
          result,
        });
        next();
      });
      return done();
    });
  }


  getentry(req, res, next) {
    const index = parseInt(req.params.id, 10);
    const userid = req.userId;
    pool.connect((err, client, done) => {
      if (err) return done(err);
      client.query(`SELECT * FROM entries WHERE userid = '${userid}' AND id = '${index}'`, (error, response) => {
        if (error) {
          console.error('query error', error.message, error.stack);
        }
        const result = response.rows;
        if (response.rowCount === 0) {
          res.status(200).send({
            success: 'true',
            message: 'entry not found',
            result,
          });
          done();
        } else {
          res.status(200).send({
            success: 'true',
            message: 'entry selected successfully',
            result,
          });
        }
        next();
      });
      return done();
    });
  }


  updateentry(req, res, next) {
    const { title } = req.body;
    const { content } = req.body;
    const index = parseInt(req.params.id, 10);
    const userid = req.userId;
    pool.connect((err, client, done) => {
      if (err) return done(err);
      client.query(`UPDATE entries SET content='${content}' , title='${title}' WHERE userid = '${userid}' AND id = '${index}'`, (error, response) => {
        if (error) {
          console.error('query error', error.message, error.stack);
        }
        const result = response.rows;
        if (response.rowCount === 0) {
          res.status(200).send({
            success: 'true',
            message: 'entry not found',
            result,
          });
          done();
        } else {
          res.status(200).send({
            success: 'true',
            message: 'entry updated successfully',
            result,
          });
          next();
        }
      });
      return done();
    });
  }
}

const entrycontroller = new Queries();
export default entrycontroller;
