import input from './input.js'

let product = 1

for (let i = 0; i < input.times.length; i++) {
  let sum = 0
  for (let j = 1; j < input.times[i]; j++) {
    if (j * (input.times[i] - j) > input.distances[i]) {
      sum++
    }
  }
  product *= sum
}

console.log(product)
