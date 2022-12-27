import fs from 'fs'

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

console.log(
  fs.readFileSync('./input.txt')
    .toString()
    .split('\n')
    .filter((x) => !!x)
    .map((rucksack) => {
      for (let i = 0; i < rucksack.length / 2; i++) {
        const item = rucksack[i]
        if (rucksack.indexOf(item, rucksack.length / 2) !== -1) {
          return priorities.indexOf(item) + 1
        }
      }
    })
    .reduce((a, b) => a+b)
)
