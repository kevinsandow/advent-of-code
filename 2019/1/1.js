import fs from 'fs'

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map(Number)

let total = 0

for (const mass of input) {
  total += Math.floor(mass / 3) - 2
}

console.log(total)
