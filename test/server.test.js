let chai = require('chai');
let expect = chai.expect;
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Server tests',() => {
  let app

  before((done) => {
    app = require('../src/server/app');
    done();
  });

  describe('/oddEven/:num route',() => {
    it('should return the string "even" if num is an even number', (done) => {
      chai.request(app)
        .get('/oddEven/4')
        .end((err,response) => {
          expect(response).to.have.status(200);
          expect(response.body.result).to.equal('even');
          expect(response).to.be.json;
          done();
        })
    });
    it('should return the string "odd" if num is an even number', (done) => {
      chai.request(app)
        .get('/oddEven/3')
        .end((err,response) => {
          expect(response).to.have.status(200);
          expect(response.body.result).to.equal('odd');
          expect(response).to.be.json;
          done();
        })
    });
    it('sends error when sent a non-number', (done) => {
      chai.request(app)
        .get('/oddEven/abc')
        .end((err,response) => {
          expect(err).to.have.status(500);
          expect(err.response.res.text).to.include('expects an integer');
          done();
        })
    });
  })
  describe('/capitalize/ route',() => {
    it('should return a string with first letter capitalized (word)', (done) => {
      chai.request(app)
        .post('/capitalize')
        .send({sentence: 'test'})
        .end((err,response) => {
          expect(response).to.have.status(200);
          expect(response.body.result).to.equal('Test');
          expect(response).to.be.json;
          done();
        })
    });
    it('should return a string with first letter capitalized (sentence)', (done) => {
      chai.request(app)
        .post('/capitalize')
        .send({sentence: 'testing this route'})
        .end((err,response) => {
          expect(response).to.have.status(200);
          expect(response.body.result).to.equal('Testing This Route');
          expect(response).to.be.json;
          done();
        })
    });
    
    it('sends error when sent a non-string', (done) => {
      chai.request(app)
        .get('/oddEven/abc')
        .end((err,response) => {
          expect(err).to.have.status(500);
          expect(err.response.res.text).to.include('expects an integer');
          done();
        })
    });
  })

});