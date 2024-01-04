const request = require('supertest');
const express = require('express');
const usersRoute = require('../routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/', usersRoute);

describe('GET /api/users', function() {
    it('responds with json', function(done) {
        request(app)
            .get('/api/users')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});