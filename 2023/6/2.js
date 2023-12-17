import input from './input.js'

const time = +input.times.map(i => `${i}`).join('')
const distance = +input.distances.map(i => `${i}`).join('')

let sum = 0
for (let j = 1; j < time; j++) {
  if (j * (time - j) > distance) {
    sum++
  }
}

console.log(sum)
