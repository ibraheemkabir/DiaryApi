import app from '../../app';

process.env.NODE_ENV = 'test';


const chaiHttp = require('chai-http');
const chai = require('chai');

const expect = chai.expect();
const should = chai.should();
chai.use(chaiHttp);

describe('/POST entry', () => {
  it('it should add new posts', (done) => {
    const users = {
      title: 'J.R.R. Tolkien',
      content: 'i saw game of thrones today',
    };
    chai.request(app)
      .post('/api/v1/entry')
      .send(users)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
