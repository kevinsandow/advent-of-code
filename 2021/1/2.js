import fs from 'fs'

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map(Number)

let increased = 0
for (let i = 0; i < input.length - 1 - 2; i++) {
  if (input[i + 1] + input[i + 2] + input[i + 3] > input[i] + input[i + 1] + input[i + 2]) {
    increased++
  }
}

console.log(increased)
