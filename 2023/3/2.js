import input from './input.js'

let sum = 0

input.forEach((line, lineNumber) => {
  for (const match of line.matchAll(/\*/g)) {
    const { index } = match

    const numbers = [
      line.substring(0, index).match(/\d+$/)?.[0] || '',
      line.substring(index + 1).match(/^\d+/)?.[0] || '',
      (input[lineNumber - 1].substring(0, index).match(/\d+$/)?.[0] || '') +
      input[lineNumber - 1][index] +
      (input[lineNumber - 1].substring(index + 1).match(/^\d+/)?.[0] || ''),
      (input[lineNumber + 1].substring(0, index).match(/\d+$/)?.[0] || '') +
      input[lineNumber + 1][index] +
      (input[lineNumber + 1].substring(index + 1).match(/^\d+/)?.[0] || ''),
    ].join('|').match(/\d+/g).map(Number)

    if (numbers.length === 2) {
      sum += numbers[0] * numbers[1]
    }
  }
})

console.log(sum)
