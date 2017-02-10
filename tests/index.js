var assert = require('assert');
var util = require('util');

var TestsUtils = require('./utils');
var PromiseUtils = require('../dist/promise-utils');

describe('PromiseUtils', function() {

  describe('all()', function() {
    it('should call progress callback', function(done) {

      PromiseUtils.all([
        TestsUtils.timeout(1, 2),
        TestsUtils.timeout(2, 1)
      ])
      .progress(function(resolved, total){
        if (resolved == total)
          done();
      })
      .catch(function(err){
        done(err);
      });

    });
  });

  describe('props()', function(done) {

    var expectedResults = {
      one: 1,
      two: 2,
    };

    it('should resolve good results', function(done) {

      PromiseUtils.props({
        one: TestsUtils.timeout(1, 2),
        two: TestsUtils.timeout(2, 1),
      })
      .then(function(results) {
        done(assert.deepEqual(results, expectedResults));
      })
      .catch(function(err){
        done(err);
      });

    });

    it('should call progress callback', function(done) {

      PromiseUtils.props({
        one: TestsUtils.timeout(1, 2),
        two: TestsUtils.timeout(2, 1),
      })
      .progress(function(resolved, total){
        if (resolved == total)
          done();
      })
      .catch(function(err){
        done(err);
      });

    });

  });

});
