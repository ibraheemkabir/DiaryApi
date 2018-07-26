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


// Test the /GET route
describe('/GET entries', () => {
  it('it should a particular entry', (done) => {
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


// Test the /GET route
describe('/GET entries', () => {
  it('it should GET all the entries', (done) => {
    chai.request(app)
      .get('/api/v1/entry')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});

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
