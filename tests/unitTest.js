const request = require('supertest');
const app = require('../app');

describe('POST /v1/user', function () {
  it('Create new user', function (done) {
    request(app).post('/v1/user')
      .send({ name: 'Zulha', email: 'zulha@gmail.com' })
      .expect(200, done);
  });
});

describe('GET /v1/users', function () {
  it('Get all users', function (done) {
    request(app).get('/v1/users')
      .expect(200, done);
  });
});

describe('GET /v1/user/:userId', function () {
  it('Get user by user id', function (done) {
    request(app).get('/v1/user/1')
      .expect(200, done);
  });

  it('Error user not found', function (done) {
    request(app).get('/v1/user/20')
      .expect(422, done);
  });
});
