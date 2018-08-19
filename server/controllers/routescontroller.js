/* eslint-disable class-methods-use-this */
import entry from '../helpers/array';

const datetime = require('node-datetime');

const id = 1;
const dt = datetime.create();
const formatted = dt.format('m/d/Y');

class Entriescontroller {
  addentry(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.content) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }
    const enter = {
      id: id + 1,
      title: req.body.title,
      content: req.body.content,
      date: formatted,
    };
    return res.status(200).send({
      success: 'true',
      message: 'entry added successfully',
      enter,
    });
  }

  deleteentry(req, res) {
  // const index = parseInt(req.params.id, 10);
    const arr = entry.find(c => c.id === parseInt(req.params.id, 10));
    if (arr) {
      entry.splice(arr, 1);
      return res.status(200).send({
        success: 'true',
        message: 'entry deleted successfuly',
      });
    }
    return res.status(404).send({
      success: 'false',
      message: 'entry not found',
    });
  }

  allentries(req, res) {
    const { userId } = req;
    res.status(200).send({
      success: 'true',
      message: 'entries retrieved successfully',
      entries: entry,
      id: userId,
    });
  }


  getentry(req, res) {
    const id = parseInt(req.params.id, 10);
    const arr = entry.find(c => c.id === parseInt(req.params.id, 10));
    if (arr) {
      return res.status(200).send({
        success: 'true',
        message: 'entry retrieved successfully',
        todo: arr,
      });
    }
    return res.status(404).send({
      success: 'false',
      message: `entry with the id ${id} does not exist`,
    });
  }


  updateentry(req, res) {
    const arr = entry.find(c => c.id === parseInt(req.params.id, 10));
    if (!arr) {
      return res.status(404).send({
        success: 'false',
        message: 'entry not found',
      });
    }

    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.content) {
      return res.status(400).send({
        message: 'content is required',
      });
    }

    const updatedentry = {
      id: parseInt(req.params.id, 10),
      title: req.body.title || arr.title,
      content: req.body.content || arr.content,
    };

    entry.splice(arr, 1, updatedentry);

    return res.status(200).send({
      success: 'true',
      message: 'entry added successfully',
      updatedentry,
    });
  }
}

const entrycontroller = new Entriescontroller();
export default entrycontroller;
