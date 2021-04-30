var env = require('dotenv').config();
var request = require('supertest');
describe('loading express', function () {
  var app;

  before(async function () {
    app = require('../app.js');
  });

  it('responds to /', async function testSlash() {
    await request(app)
    .get('/')
    .expect(200);
  });

  it('responds to /users', async function testUsers(){
    await request(app)
    .get('/users')
    .expect(200);
  })

  it('404s everything else', async function testPath() {
    await request(app)
    .get('/asdf')
    .expect(404);
  });
});
