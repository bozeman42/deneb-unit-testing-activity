function isEvenOrOdd(num) {
  if (typeof(num) !== 'number') {
    throw new TypeError('isEvenOrOdd expects a number','oddEven.js');
  } else if (num % 1 !== 0) {
    throw new TypeError('isEvenOrOdd expects an integer','oddEven.js');
  }
  return num % 2 === 0 ? 'even' : 'odd';
}

module.exports = isEvenOrOdd;
