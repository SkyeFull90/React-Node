const userController = require('../controllers/userController');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('UserController', () => {
    it('should return all users', () => {
        const req = {};
        const res = {
            send: sinon.spy()
        };

        userController.getUsers(req, res);
        expect(res.send.calledOnce).to.be.true;
        const users = res.send.firstCall.args[0];
        expect(users).to.be.a('array');
        expect(users.length).to.be.eql(2);
        expect(users[0]).to.have.property('name').eql('John');
        expect(users[1]).to.have.property('name').eql('Jane');
    });
});