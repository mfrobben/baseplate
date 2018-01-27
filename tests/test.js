var request = require('supertest');
describe('loading express', function () {
  var app;

  beforeEach(function () {
    app = require('../app.js');
  });

  it('responds to /', function testSlash(done) {
  request(app)
    .get('/')
    .expect(200, done);
  });

  it('responds to /users', function testUsers(done){
    request(app)
      .get('/users')
      .expect(200, done);
  })

  it('404s everything else', function testPath(done) {
    request(app)
      .get('/foo/bar')
      .expect(404, done);
  });
});
