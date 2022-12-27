import fs from 'fs'

const instructions = {
  '(': 1,
  ')': -1,
}

console.log(
  fs.readFileSync('./input.txt')
    .toString()
    .split('')
    .map((x) => instructions[x])
    .reduce((a, b) => a + b)
)
