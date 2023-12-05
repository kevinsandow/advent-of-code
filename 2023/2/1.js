import input from './input.js'

const bag = {
  red: 12,
  green: 13,
  blue: 14,
}

console.log(
  input
    .filter(([, ds]) => ds.every(cs => cs.every(v => v[0] <= bag[v[1]])))
    .reduce((memo, [id]) => memo + id, 0)
)
