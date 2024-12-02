import input from './input.js'

console.log(
  input
    .map(l => l.sort())
    .reduce((left, right) => left.map((n, i) => Math.abs(n - right[i])))
    .reduce((a, b) => a + b, 0)
)
