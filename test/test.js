process.env.NODE_ENV = 'test';
const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../server');

const expect = chai.expect();
const should = chai.should();
chai.use(chaiHttp);

describe('/POST users', () => {
  it('it should register new users', (done) => {
    const users = {
      title: 'J.R.R. Tolkien',
      content: 'i saw game of thrones',
    };
    chai.request(app)
      .post('/api/v1/entry')
      .send(users)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
