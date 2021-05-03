const logicCheck = require('./logic')
const prompt = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  prompt.question(`What's your word?`, word => {
    console.log(logicCheck(word))
    prompt.close()
  })

  module.exports = prompt