const Palindrome = require('./pallindrome-challenge')
const palindrome = new Palindrome()

function logic(input) {
    const result = palindrome.check(input)
    if (result == false) {
        return `${input} is not a palindrome`
    } else {
        return `${input} is a palindrome`
    }
}

module.exports = logic