import fs from 'fs'

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map(Number)

let frequency = 0
const frequencies = [frequency]

for (let i = 0; ; i++) {
  frequency += input[i % input.length]

  if (frequencies.includes(frequency)) {
    console.log(frequency)
    break
  }

  frequencies.push(frequency)
}
