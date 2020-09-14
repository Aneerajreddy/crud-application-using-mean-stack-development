process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require("./server")

var should = chai.should();
chai.use(chaiHttp);


describe('employee', function() {



    this.timeout(10000);
    xit('should list ALL employees on /employee GET', function() {
        chai.request(server)
            .get('/employee/list')
            .end(function(err, res) {

                res.should.have.status(200);
                res.should.be.html;


            });
    });



    xit('should add a  employee on /employees POST', function() {
        chai.request(server)
            .post('/employee/list')
            .end(function(err, res) {

                res.should.have.status(404);
                res.should.be.html;


            });
    });

    xit('should update a employee on /employees/<id> PUT', function() {
        chai.request(server)
            .put('/employee/addOrEdit')
            .end(function(err, res) {

                res.should.have.status(404);
                res.should.be.html;

            });
    });


    xit('should delete a employee on /employee/<id> DELETE', function() {
        chai.request(server)
            .delete('/employee/list')
            .end(function(err, res) {

                res.should.have.status(404);
                res.should.be.html;

            });
    });
});