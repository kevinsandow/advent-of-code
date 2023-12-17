import input from './input.js'

console.log(
  input
    .map((line) =>
      line
        .split('')
        .map((c) => c.charCodeAt(0))
        .reduce((hash, n) => ((hash + n) * 17) % 256, 0)
    )
    .reduce((a, b) => a + b)
)
