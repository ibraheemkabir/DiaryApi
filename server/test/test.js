import app from '../../app';

process.env.NODE_ENV = 'test';


const chaiHttp = require('chai-http');

const chai = require('chai');

const expect = chai.expect();
const should = chai.should();

const request = require('supertest');

chai.use(chaiHttp);

const userCredentials = {
  username: 'testguy36',
  password: 'test',
};

const users = {
  title: 'J.R.R. Tolkien',
  content: 'i saw game of thrones today',
};


describe('/POST entry', () => {
  let token;
  let id;

  before(async () => {
    const res = await chai.request(app)
      .post('/api/v1/users/auth/signup')
      .send(userCredentials);
 		token = res.body.token;
  });

  it('it should add new posts', (done) => {
    request(app)
      .post('/api/v1/entries')
      .send(users)
      .set('token', `${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        id = res.body.id;
        done();
      });
  });

  it('it should update an entry', (done) => {
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
