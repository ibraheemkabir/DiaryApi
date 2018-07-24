process.env.NODE_ENV = 'test';
const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../app');

const expect = chai.expect();
const should = chai.should();
chai.use(chaiHttp);


// Test the /GET route
describe('/GET entries', () => {
  it('it should GET all the entries', (done) => {
    chai.request(app)
      .get('/api/v1/entries')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
