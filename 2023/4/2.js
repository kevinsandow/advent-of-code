import input from './input.js'

console.log(
  input
    .map((c) => c.haveNumbers.filter((n) => c.winningNumbers.includes(n)).length)
    .reduce(
      (memo, c, idx) => memo.map((v, i) => i > idx && i <= idx + c ? v + memo[idx] : v),
      new Array(input.length).fill(1),
    )
    .reduce((a, b) => a + b, 0)
)
