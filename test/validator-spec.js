'use-strict';

var assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect,
    validatorWidth = require('../lib/validator'),
    nonPositiveValidationRule = require('../lib/rules/nonPositive'),
    nonDivisibleValidationRule = require('../lib/rules/nonDivisible');

describe('A Validator', function() {
  it('will return no error for valid numbers', function() {
    var validator = validatorWidth([
      nonPositiveValidationRule,
      nonDivisibleValidationRule(3, 'error.three'),
      nonDivisibleValidationRule(5, 'error.five')
    ]);
    expect(validator(7)).to.be.empty;
  });
  describe('will return error.nonpositive for not strictly positive numbers', function() {
    it('like 0', function(){
      var validator = validatorWidth([
        nonPositiveValidationRule,
        nonDivisibleValidationRule(3, 'error.three'),
        nonDivisibleValidationRule(5, 'error.five')
      ]);
      expect(validator(0)).to.include('error.nonpositive');
    });
    it('like -2', function(){
      var validator = validatorWidth([
        nonPositiveValidationRule,
        nonDivisibleValidationRule(3, 'error.three'),
        nonDivisibleValidationRule(5, 'error.five')
      ]);
      expect(validator(-2)).to.include('error.nonpositive');
    });
  });
  describe('will return error.three for divisible by 3 numbers:', function() {
    it('like 9', function() {
      var validator = validatorWidth([
        nonPositiveValidationRule,
        nonDivisibleValidationRule(3, 'error.three'),
        nonDivisibleValidationRule(5, 'error.five')
      ]);
      expect(validator(9)).to.include('error.three');
    });
    it('like 3', function() {
      var validator = validatorWidth([
        nonPositiveValidationRule,
        nonDivisibleValidationRule(3, 'error.three'),
        nonDivisibleValidationRule(5, 'error.five')
      ]);
      expect(validator(3)).to.include('error.three');
    });
  });
  describe('will return error.five for divisible by 5 numbers:', function() {
    it('like 5', function() {
      var validator = validatorWidth([
        nonPositiveValidationRule,
        nonDivisibleValidationRule(3, 'error.three'),
        nonDivisibleValidationRule(5, 'error.five')
      ]);
      expect(validator(5)).to.include('error.five');
    });
    it('like 15', function() {
      var validator = validatorWidth([
        nonPositiveValidationRule,
        nonDivisibleValidationRule(3, 'error.three'),
        nonDivisibleValidationRule(5, 'error.five')
      ]);
      expect(validator(15)).to.include('error.five');
    });
  });
});