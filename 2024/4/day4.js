import fs from 'node:fs'

const input = fs
  .readFileSync(process.stdin.fd)
  .toString()
  .trim()
  .split('\n')

const needle = 'XMAS'
const needleReverse = needle.split('').reverse().join('')

let level1 = 0
for (let y = 0; y < input.length; y++) {
  for (let x = 0; x < input[y].length; x++) {
    const canGoRight = x + needle.length <= input[y].length
    const canGoLeft = x >= needle.length - 1
    const canGoDown = y + needle.length <= input.length

    if (canGoRight) {
      const slice = input[y].slice(x, x + needle.length)
      if (slice === needle || slice === needleReverse) {
        level1++
      }
    }

    if (canGoDown) {
      let slice = ''
      for (let i = 0; i < needle.length; i++) {
        slice += input[y + i][x]
      }
      if (slice === needle || slice === needleReverse) {
        level1++
      }
    }

    if (canGoDown && canGoRight) {
      let slice = ''
      for (let i = 0; i < needle.length; i++) {
        slice += input[y + i][x + i]
      }
      if (slice === needle || slice === needleReverse) {
        level1++
      }
    }

    if (canGoDown && canGoLeft) {
      let slice = ''
      for (let i = 0; i < needle.length; i++) {
        slice += input[y + i][x - i]
      }
      if (slice === needle || slice === needleReverse) {
        level1++
      }
    }
  }
}
console.log('Level 1:', level1)

let level2 = 0
for (let y = 1; y < input.length - 1; y++) {
  for (let x = 1; x < input[y].length - 1; x++) {
    if (input[y][x] !== 'A') {
      continue
    }

    const topLeft = input[y - 1][x - 1]
    const topRight = input[y - 1][x + 1]
    const bottomLeft = input[y + 1][x - 1]
    const bottomRight = input[y + 1][x + 1]

    const diagonalRight = (topLeft === 'M' && bottomRight === 'S') || (topLeft === 'S' && bottomRight === 'M')
    const diagonalLeft = (topRight === 'M' && bottomLeft === 'S') || (topRight === 'S' && bottomLeft === 'M')

    if (diagonalRight && diagonalLeft) {
      level2++
    }
  }
}
console.log('Level 2:', level2)
