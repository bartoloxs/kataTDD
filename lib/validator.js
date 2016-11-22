var nonPositiveValidationRule = require('./rules/nonPositive'),
    nonDivisibleValidationRule = require('./rules/nonDivisible'),
    validationules = [
    nonPositiveValidationRule,
    nonDivisibleValidationRule(3,'error.three'),
    nonDivisibleValidationRule(5,'error.five')
  ];

module.exports = function (n) {
  return validationules.reduce(function(result, rule) {
    rule(n, result);
    return result;
  }, []);
}