import input from './input.js'

console.log(
  input
    .reduce((left, right) => left.map(
      (n, i) => n * right.filter(r => r === n).length
    ))
    .reduce((a, b) => a + b, 0)
)
