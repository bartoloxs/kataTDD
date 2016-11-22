'use-strict';

var assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect,
    validator = require('../lib/validator');

function expectedToIncludeErrorWhenInvalid(example) {
  it('like' + example.number, function() {
    expect(validator(example.number)).to.include(example.error);
  });
}

describe('A Validator', function() {
  it('will return no error for valid numbers', function() {
    expect(validator(7)).to.be.empty;
  });
  describe('will return error.nonpositive for not strictly positive numbers', function() {
    [
      {number: 0, error: 'error.nonpositive'},
      {number: -2, error: 'error.nonpositive'}
    ].forEach(expectedToIncludeErrorWhenInvalid);
  });
  describe('will return error.three for divisible by 3 numbers:', function() {
    [
      {number: 3, error: 'error.three'},
      {number: 15, error: 'error.three'}
    ].forEach(expectedToIncludeErrorWhenInvalid);
  });
  describe('will return error.five for divisible by 5 numbers:', function() {
    [
      {number: 5, error: 'error.five'},
      {number: 15, error: 'error.five'}
    ].forEach(expectedToIncludeErrorWhenInvalid);
  });
});