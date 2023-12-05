import input from './input.js'

const numbers = [
  '\\d',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]

const firstNumber = new RegExp(`(${numbers.join('|')})`)
const lastNumber = new RegExp(`.*(${numbers.join('|')})`)

function toNumber(s) {
  const idx = numbers.findIndex(v => v === s)
  if (idx !== -1) {
    return idx
  }

  return +s
}

console.log(
  input
    .map(l => 10 * toNumber(l.match(firstNumber)[0]) + toNumber(l.match(lastNumber)[1]))
    .reduce((a, b) => a + b, 0)
)
