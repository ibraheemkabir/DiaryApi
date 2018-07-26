import app from '../../app';

process.env.NODE_ENV = 'test';


const chaiHttp = require('chai-http');
const chai = require('chai');

const expect = chai.expect();
const should = chai.should();
chai.use(chaiHttp);

describe('/POST users', () => {
  it('it should update an entry', (done) => {
    const id = 1;
    const users = {
      title: 'corrected title',
      content: 'i am corrected',
    };
    chai.request(app)
      .put(`/api/v1/entry/${id}`)
      .send(users)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('title');
        res.body.should.have.property('id');
        res.body.title.should.equal('corrected title');
        done();
      });
  });
});

