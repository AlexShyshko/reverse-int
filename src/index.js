module.exports = function reverse (n) {
    let originalNumber = n;
    if (originalNumber % 10 === 0) {
      originalNumber = originalNumber / 10;
    }
    if (originalNumber < 0) {
      originalNumber = Math.abs(originalNumber);
    }
    originalNumber = String(originalNumber);
    originalNumber = originalNumber.split('').reverse().join('');
    return originalNumber = Number(originalNumber);
  }
