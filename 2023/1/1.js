import input from './input.js'

console.log(
  input
    .map(l => l.replace(/\D/g, ''))
    .map(n => +`${n[0]}${n[n.length - 1]}`)
    .reduce((a, b) => a + b, 0)
)
