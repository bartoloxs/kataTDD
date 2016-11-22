'use-strict';

var assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect,
    validator = require('../lib/validator');

describe('A Validator', function() {
  it('will return no error for valid numbers', function() {
    expect(validator(7)).to.be.empty;
  });
  describe('will return error.nonpositive for not strictly positive numbers', function() {
    it('like 0', function() {
      expect(validator(0)).to.include('error.nonpositive');
    });
    it('like -2', function() {
      expect(validator(-2)).to.include('error.nonpositive');
    });
  });
  describe('will return error.three for divisible by 3 numbers:', function() {
    it('like 3', function() {
      expect(validator(3)).to.include('error.three');
    });
    it('like 15', function() {
      expect(validator(15)).to.be.include('error.five');
    });
  });
  describe('will return error.five for divisible by 5 numbers:', function() {
    it('like 5', function() {
      expect(validator(5)).to.include('error.five');
    });
    it('like 15', function() {
      expect(validator(15)).to.include('error.five');
    });
  });
});