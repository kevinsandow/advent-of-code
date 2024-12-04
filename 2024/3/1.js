import input from './input.js'

const regex = /mul\((\d+),(\d+)\)/g

console.log(
  input
    .split('\n')
    .filter((x) => !!x)
    .flatMap(l => [...l.matchAll(regex)])
    .map(match => match[1] * match[2])
    .reduce((a, b) => a + b, 0)
)
