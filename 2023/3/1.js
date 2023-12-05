import input from './input.js'

let sum = 0

input.forEach((line, lineNumber) => {
  for (const match of line.matchAll(/\d+/g)) {
    const length = match[0].length
    const number = +match[0]
    const { index } = match

    const lines = [
      line.substring(
        Math.max(index - 1, 0),
        Math.min(index + length + 1, line.length),
      )
    ]

    if (lineNumber > 0) {
      lines.push(
        input[lineNumber - 1].substring(
          Math.max(index - 1, 0),
          Math.min(index + length + 1, line.length),
        )
      )
    }

    if (lineNumber + 1 < input.length) {
      lines.push(
        input[lineNumber + 1].substring(
          Math.max(index - 1, 0),
          Math.min(index + length + 1, line.length),
        )
      )
    }

    if (lines.some(l => /[^\d.]/.test(l))) {
      sum += number
    }
  }
})

console.log(sum)
