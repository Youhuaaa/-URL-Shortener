const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '1234567890'
const collection = lowerCaseLetters + upperCaseLetters + numbers

function generateUrl() {
  let result = 'youhua-reurl.herokuapp.com/'
  for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * [...collection].length)
    result += collection[index]
  }

  console.log(result)
  return result
}

module.exports = generateUrl