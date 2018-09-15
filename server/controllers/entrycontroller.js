/* eslint-disable class-methods-use-this */

import { entries } from '../models';

const datetime = require('node-datetime');


const dt = datetime.create();
const formatted = dt.format('d/m/Y');

class Queries {
  addentry(req, res) {
    const { title } = req.body;
    const { content } = req.body;
    const date = formatted;
    const userid = req.userId;
    const newentry = entries.create({
      title, content, userid
    })
      .then(entry => { return res.status(200).send(entry); });
  }

  deleteentry(req, res) {
    const index = parseInt(req.params.id, 10);
    const userid = req.userId;
    const newentry = entries.destroy({
      where: {userid: userid,id: index}
    })
      .then(entry => { if (entry === 0){
        return res.json({
          success: 'true',
            message: 'entry not found',
            entry,
      })}else{
        return res.status(200).json({
          success: 'true',
          message: 'entry deleted successfully',
          entry,
        });
      }
      })
    .catch(entry => { return res.status(200).json(entry); });
  }

  allentries(req, res, next) {
    const { userId } = req;
    const newentry = entries.findAll({
       where: {userid: userId}
    })
    .then(entry => { return res.status(200).send({
      success: 'true',
      message: 'All entries retrieved',
      entry,
     });
  });
  }

  getentry(req, res, next) {
    const index = parseInt(req.params.id, 10);
    const userid = req.userId;
   const newentry = entries.findOne({
      where: {userid: userid,id: index}
    })
    .then(entry=>{
        if (!entry) {
          res.status(200).send({
            success: 'true',
            message: 'entry not found',
            entry,
          });
         } else {
          res.status(200).send({
            success: 'true',
            message: 'entry selected successfully',
            entry,
          });
        } 
        });
  }

  updateentry(req, res, next) {
    const { title } = req.body;
    const { content } = req.body;
    const index = parseInt(req.params.id, 10);
    const userid = req.userId;
    const update= entries.update({
      content,title
    }, {
    where: {
      userid,id: index
    }
    })
    .then(result=>{
       res.status(200).send({
            success: 'true',
            message: 'entry updated succesfully',
            result,
          });
    });
  }
}

const entrycontroller = new Queries();
export default entrycontroller;
