import input from './input.js'

console.log(
  input
    .map(l => l.slice(0, -1).map((n, i) => n - l[i + 1]))
    .map(l => l.every(n => n > 0 && n <= 3) || l.every(n => n < 0 && n >= -3) ? 1 : 0)
    .reduce((a, b) => a + b, 0)
)
