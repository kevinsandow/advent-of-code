import fs from 'fs'

const input = fs.readFileSync('./input.txt')
  .toString()
  .split(', ')
  .map((instructions) => ([instructions[0], +instructions.slice(1)]))

let orientation = 0
let x = 0
let y = 0

const hLines = []
const vLines = []

function getIntersection(lineA, lineB) {
  if (lineB[1] >= lineA[0] || lineB[2] <= lineA[0]) {
    return undefined
  }

  if (lineA[1] >= lineB[0] || lineA[2] <= lineB[0]) {
    return undefined
  }

  return [lineA[0], lineB[0]]
}

for (const [turn, distance] of input) {
  orientation = (orientation + 4 + (turn === 'R' ? 1 : -1)) % 4

  let line = []
  switch (orientation) {
    case 0:
      y -= distance
      line = [x, y, y + distance]
      break
    case 1:
      x += distance
      line = [y, x - distance, x]
      break
    case 2:
      y += distance
      line = [x, y - distance, y]
      break
    case 3:
      x -= distance
      line = [y, x, x + distance]
      break
  }

  if ([0, 2].includes(orientation)) {
    vLines.push(line)

    const intersection = hLines.map((hLine) => getIntersection(hLine, line)).find((x) => !!x)
    if (intersection) {
      console.log(Math.abs(intersection[0]) + Math.abs(intersection[1]))
      break
    }
  }

  if ([1, 3].includes(orientation)) {
    hLines.push(line)

    const intersection = vLines.map((vLine) => getIntersection(vLine, line)).find((x) => !!x)
    if (intersection) {
      console.log(Math.abs(intersection[0]) + Math.abs(intersection[1]))
      break
    }
  }
}
