import fs from 'fs'

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map(Number)

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === 2020) {
      console.log(input[i] * input[j])
    }
  }
}
