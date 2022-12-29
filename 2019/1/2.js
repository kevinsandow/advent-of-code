import fs from 'fs'

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map(Number)

let total = 0

for (const mass of input) {
  for (let fuel = Math.floor(mass / 3) - 2; fuel >= 0; fuel = Math.floor(fuel / 3) - 2) {
    total += fuel
  }
}

console.log(total)
