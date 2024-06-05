const request = require('request');
const { describe, it } = require('mocha');
const expect = require('chai').expect;
const app = require('./api');

describe('Index page', function () {
  const options = {
    url: 'http://localhost:7865/',
    method: 'GET',
  };
  it('check correct status code', function (done) {
    request(options, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('check correct content', function (done) {
    request(options, function (err, res, body) {
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });
  it('check correct content length', function (done) {
    request(options, function (err, res, body) {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});

describe('Index page2', () => {
  const url = 'http://localhost:7865/';

  it('should return status code 200', (done) => {
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
