process.env.NODE_ENV = 'test';
const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../../app');

const expect = chai.expect();
const should = chai.should();
chai.use(chaiHttp);


// Test the /GET route
describe('/GET entries', () => {
  it('it should get a particular entry', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/entry/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
