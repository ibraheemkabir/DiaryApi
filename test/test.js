process.env.NODE_ENV = 'test';
const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../app');

const expect = chai.expect();
const should = chai.should();
chai.use(chaiHttp);


// Test the /GET route
describe('/DELETE entry', () => {
  it('it should add an entry', (done) => {
    chai.request(app)
      .delete('/api/v1/entry/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
