process.env.NODE_ENV = 'test';
const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../server');

const expect = chai.expect();
const should = chai.should();
chai.use(chaiHttp);


// Test the /GET route
describe('/GET users', () => {
  it('it should GET all the users', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});

describe('/POST users', () => {
  it('it should register new users', (done) => {
    const users = {
      name: 'J.R.R. Tolkien',
      email: 'usern2gamil.com',
      password: 'ibr34',
    };
    chai.request(app)
      .post('/api/v1/users/signup')
      .send(users)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('/POST users', () => {
  it('it should register new users', (done) => {
    const users = {
      email: 'usern2gamil.com',
      password: 'ibr34',
    };
    chai.request(app)
      .post('/api/v1/users/sigin')
      .send(users)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('/GET entries', () => {
  it('it should GET all the users', (done) => {
    chai.request(app)
      .get('/api/v1/entries')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});

describe('/POST entries', () => {
  it('it should enter a new post', (done) => {
    const entry = {
      T: 'usern2gamil.com',
      password: 'ibr34',
    };
    chai.request(app)
      .post('/api/v1/entries/post')
      .send(entry)
      .end((err, res) => {
        res.should.have.status(202);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('/DEL entries', () => {
  it('it should delete user entry', (done) => {
    chai.request(app)
      .post('/api/v1/entries/delete/21')
      .end((err, res) => {
        res.should.have.status(202);
        res.body.should.be.a('object');
        done();
      });
  });
});
