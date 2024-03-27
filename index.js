const randomColor = require('./randomColor')
const isPalindrome = require('./isPalindrome')

module.exports = () => {
    return Math.floor(Date.now() / 1000);
  }