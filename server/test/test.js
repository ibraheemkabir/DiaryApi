import app from '../../app';

process.env.NODE_ENV = 'test';


const chaiHttp = require('chai-http');

const chai = require('chai');

const expect = chai.expect();
const should = chai.should();

const request = require('supertest');

chai.use(chaiHttp);

const userCredentials = {
  username: 'kabir21',
  password: 'kabir',
};

const users = {
  title: 'J.R.R. Tolkien',
  content: 'i saw game of thrones today',
};


describe('/POST entry', () => {
  let token;

  before((done) => {
    request(app)
      .post('/api/v1/users/auth/signin')
      .send(userCredentials)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('token');
        if (err) throw err;
        token = res.body.token;
        done();
  });
});

  it('it should add new posts', (done) => {
    request(app)
      .post('/api/v1/entries')
      .send(users)
      .set('token', `${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('it should update an entry', (done) => {
    const id = 1;
    chai.request(app)
      .put(`/api/v1/entries/${id}`)
      .send(users)
      .set('token', `${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

   it('it should a particular entry', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/entries/${id}`)
      .set('token', `${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('it should GET all the entries', (done) => {
    chai.request(app)
      .get('/api/v1/entries')
      .set('token', `${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

   it('it should delete an entry', (done) => {
    chai.request(app)
      .delete('/api/v1/entries/1')
      .set('token', `${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
