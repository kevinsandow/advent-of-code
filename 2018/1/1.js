import fs from 'fs'

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map(Number)

let frequency = 0

for (const change of input) {
  frequency += change
}

console.log(frequency)
