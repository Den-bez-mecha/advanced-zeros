function getQuotient(number, base, exp) {
  var quotient = number / Math.pow((0.5 * base), exp);
  return quotient;
}

function getInteger(quotient) {
  var integer = Math.floor(quotient);
  return integer;
}

function getZeros(zeroCount, integer) {
  return zeroCount + integer;
}

module.exports = function getZerosCount(number, base) {
  var exp = 1;
  var zerosCount = 0;

   quot = getQuotient(number, base, exp);
  if (quot < 1) {
    return zerosCount;
  } else {
      integer = getInteger(quot);
      while (integer >= parseInt((0.5 * base))) {
        zerosCount = getZeros(zerosCount, integer);
        exp++;
        quot = getQuotient(number, base, exp);
        integer = getInteger(quot);
      }
    zerosCount = getZeros(zerosCount, integer);
  }
  return zerosCount;
}
