import fs from 'fs'

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('')
  .map(Number)

let sum = 0
for (let i = 0; i < input.length; i++) {
  if (input[i] === input[(i+input.length / 2) % input.length]) {
    sum += input[i]
  }
}

console.log(sum)
