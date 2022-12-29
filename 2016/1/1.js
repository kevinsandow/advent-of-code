import fs from 'fs'

const input = fs.readFileSync('./input.txt')
  .toString()
  .split(', ')
  .map((instructions) => ([instructions[0], +instructions.slice(1)]))

let orientation = 0
let x = 0
let y = 0

for (const [turn, distance] of input) {
  orientation = (orientation + 4 + (turn === 'R' ? 1 : -1)) % 4

  switch (orientation) {
    case 0:
      y -= distance
      break
    case 1:
      x += distance
      break
    case 2:
      y += distance
      break
    case 3:
      x -= distance
      break
  }
}

console.log(Math.abs(x) + Math.abs(y))
