function sum(a, b) {
  return a + b
}

const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk']

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1, str.length)
}

function reverseString(str) {
  let str_cp = str

  return str_cp
    .split('')
    .map((el, i, w) => (el = w[str.length - (i + 1)]))
    .join('')
}

const calculator = {
  add: function (num1, num2) {
    return num1 + num2
  },
  subtract: function (num1, num2) {
    return num1 - num2
  },
  divide: function (num1, num2) {
    return num1 / num2
  },
  multiply: function (num1, num2) {
    return num1 * num2
  },
}

function ceaserCipher(plainText, shiftFactor) {
  const copy_text = plainText
  let rv = ''

  for (let i = 0; i < copy_text.length; i++) {
    const currentASCIIVal = copy_text.charCodeAt(i)

    if (currentASCIIVal == 32) {
      rv += ' '
    } else {
      if (currentASCIIVal + (shiftFactor % 26) > 122) {
        rv += String.fromCharCode(currentASCIIVal + (shiftFactor % 26) - 26)
      } else {
        rv += String.fromCharCode(currentASCIIVal + (shiftFactor % 26))
      }
    }
  }

  return rv
}

function analyzeArray(arr) {
  const arr_cp = arr

  const sortedArr = arr_cp.sort((a, b) => a - b)
  const sumArr = sortedArr.reduce((prev, curr) => prev + curr, 0)

  const average = sumArr / arr.length
  const min = sortedArr[0]
  const max = sortedArr[arr.length - 1]
  const length = sortedArr.length

  return { average, min, max, length }
}

module.exports = { sum, shoppingList, capitalize, reverseString, calculator, ceaserCipher, analyzeArray }
