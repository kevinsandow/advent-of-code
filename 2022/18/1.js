import fs from 'fs'

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map((d) => d.split(',').map(Number))

let surfaces = 6 * input.length

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (Math.abs(input[i][0] - input[j][0]) + Math.abs(input[i][1] - input[j][1]) + Math.abs(input[i][2] - input[j][2]) === 1) {
      surfaces -= 2
    }
  }
}

console.log(surfaces)
