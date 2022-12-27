import fs from 'fs'

const instructions = {
  '(': 1,
  ')': -1,
}

const input = fs.readFileSync('./input.txt')
    .toString()
    .split('')
    .map((x) => instructions[x])

let floor = 0
for (let i = 0; i < input.length; i++) {
  floor += input[i]
  if (floor === -1) {
    console.log(i + 1)
    break
  }
}
