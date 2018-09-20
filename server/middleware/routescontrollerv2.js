/* eslint-disable class-methods-use-this */
class Entriescontroller {
  addentry(req, res, next) {
    if (!req.body.title) {
      res.status(400).send({
        success: 'false',
        message: 'title is requireds',
      });
    } else if (!req.body.content) {
      res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }
    return next();
  }

  deleteentry(req, res, next) {
    const index = parseInt(req.params.id, 10);
    if (!index) {
      res.status(400).send({
        success: 'false',
        message: 'entry id is required',
      });
    }
    return next();
  }

  allentries(req, res, next) {
    return next();
  }


  getentry(req, res, next) {
    return next();
  }


  updateentry(req, res, next) {
    const { title } = req.body;
    const { content } = req.body;
    if (!title) {
      res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!content) {
      res.status(400).send({
        message: 'content is required',
      });
    }
    return next();
  }
}

const entrycontroller = new Entriescontroller();
export default entrycontroller;
