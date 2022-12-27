import fs from 'fs'

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map((line) => line
    .split(' -> ')
    .map((coords) => coords.split(',').map(Number))
  )
  .reduce((memo, line) => [
    ...memo,
    ...line.slice(0, -1).map((coords, idx) => ([
      coords,
      line[idx + 1],
    ]))
  ], [])

const sandEntry = [500, 0]

let minX = sandEntry[0]
let maxX = sandEntry[0]
let minY = sandEntry[1]
let maxY = sandEntry[1]
for (const line of input) {
  minX = Math.min(minX, line[0][0], line[1][0])
  maxX = Math.max(maxX, line[0][0], line[1][0])
  minY = Math.min(minY, line[0][1], line[1][1])
  maxY = Math.max(maxY, line[0][1], line[1][1])
}

const grid = []
for (let y = minY; y <= maxY; y++) {
  const row = []
  for (let x = minX; x <= maxX; x++) {
    if (x === sandEntry[0] && y === sandEntry[1]) {
      row.push('+')
      continue
    }

    row.push('.')
  }
  grid.push(row)
}

for (const line of input) {
  if (line[0][0] === line[1][0]) {
    const x = line[0][0]
    for (let y = Math.min(line[0][1], line[1][1]); y <= Math.max(line[0][1], line[1][1]); y++) {
      grid[y - minY][x - minX] = '#'
    }
  }

  if (line[0][1] === line[1][1]) {
    const y = line[0][1]
    for (let x = Math.min(line[0][0], line[1][0]); x <= Math.max(line[0][0], line[1][0]); x++) {
      grid[y - minY][x - minX] = '#'
    }
  }
}

function isFree(x, y) {
  if (x < minX || x > maxX || y < minY || y > maxY) {
    return true
  }

  return grid[y - minY][x - minX] === '.'
}

let fallingForever = false
for (let i = 1; !fallingForever; i++) {
  let [x, y] = sandEntry
  for (; y < maxY; y++) {
    if (isFree(x, y + 1)) {
      continue
    }

    if (isFree(x - 1, y + 1)) {
      x = x - 1
      continue
    }

    if (isFree(x + 1, y + 1)) {
      x = x + 1
      continue
    }

    grid[y - minY][x - minX] = 'o'
    break
  }

  if (y === maxY) {
    fallingForever = true
    continue
  }

  // printGrid()
  console.log(`Units of sand: ${i}`)
}


