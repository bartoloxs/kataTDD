function nonPositiveValidationRule (n, result) {
  if(n <= 0) {
    result.push('error.nonpositive');
  }
}
function makeNonDivisibleValidationRule (divisor, error) {
  return function(n ,result) {
    if(n % divisor === 0) {
      result.push(error);
    }
  };
}
var validationules = [
  nonPositiveValidationRule,
  makeNonDivisibleValidationRule(3,'error.three'),
  makeNonDivisibleValidationRule(5,'error.five')
];

module.exports = function (n) {
  return validationules.reduce(function(result, rule) {
    rule(n, result);
    return result;
  }, []);
}