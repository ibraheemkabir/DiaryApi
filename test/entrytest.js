process.env.NODE_ENV = 'test';
const chaiHttp = require('chai-http');
const chai = require('chai');


const server = require('../server');

const should = chai.should();

chai.use(chaiHttp);

// Test the /GET route
describe('/GET users', () => {
  it('it should GET all the users', (done) => {
    chai.request(server)
    .get('/users')
    .end((err, res) => {
    res.should.have.status(200);
    res.body.should.be.a('array');

    done();
     });
  });
});

describe('/POST users', () => {
      it('it should register new users', (done) => {
        let users = {
            title: "The Lord of the Rings",
            body: "J.R.R. Tolkien",
            date: 1954
        }
        chai.request(server)
            .post('/users/signup')
            .send(book)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });
});

describe('/POST users', () => {
      it('it should signin users', (done) => {
        chai.request(server)
            .post('/users/signin')
            .send(users)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });
});

