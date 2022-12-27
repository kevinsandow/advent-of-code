import fs from 'fs'

const trees = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map((line) => line
    .split('')
    .map((height) => ({
      height: +height,
      visibleFromLeft: false,
      visibleFromTop: false,
      visibleFromRight: false,
      visibleFromBottom: false,
    }))
  )

for (let y = 0; y < trees.length; y++) {
  // Sweep from left
  for (let x = 0, size = -1; x < trees[y].length; x++) {
    if (trees[y][x].height > size) {
      trees[y][x].visibleFromLeft = true
    }
    size = Math.max(size, trees[y][x].height)
  }

  // Sweep from right
  for (let x = trees[y].length - 1, size = -1; x >= 0; x--) {
    if (trees[y][x].height > size) {
      trees[y][x].visibleFromRight = true
    }
    size = Math.max(size, trees[y][x].height)
  }
}

for (let x = 0; x < trees[0].length; x++) {
  // Sweep from top
  for (let y = 0, size = -1; y < trees.length; y++) {
    if (trees[y][x].height > size) {
      trees[y][x].visibleFromTop = true
    }
    size = Math.max(size, trees[y][x].height)
  }

  // Sweep from bottom
  for (let y = trees.length - 1, size = -1; y >= 0; y--) {
    if (trees[y][x].height > size) {
      trees[y][x].visibleFromBottom = true
    }
    size = Math.max(size, trees[y][x].height)
  }
}

let count = 0
for (let y = 0; y < trees.length; y++) {
  for (let x = 0; x < trees[y].length; x++) {
    if (
      trees[y][x].visibleFromLeft ||
      trees[y][x].visibleFromTop ||
      trees[y][x].visibleFromRight ||
      trees[y][x].visibleFromBottom
    ) {
      count++
    }
  }
}

console.log(count)
