import input from './input.js'

console.log(
  input
    .map((c) => c.haveNumbers.filter((n) => c.winningNumbers.includes(n)).length)
    .map((s) => s > 0 ? 2 ** (s - 1) : 0)
    .reduce((a, b) => a + b, 0)
)
