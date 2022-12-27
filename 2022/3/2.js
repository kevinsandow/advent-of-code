import fs from 'fs'

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

console.log(
  fs.readFileSync('./input.txt')
    .toString()
    .split('\n')
    .filter((x) => !!x)
    .reduce((rucksacks, rucksack) => {
      if (rucksacks[0].length === 3) {
        return [
          [rucksack],
          ...rucksacks,
        ]
      }

      return [
        [...rucksacks[0], rucksack],
        ...rucksacks.slice(1),
      ]
    }, [[]])
    .map((rucksacks) => {
      for (let i = 0; i < rucksacks[0].length; i++) {
        const item = rucksacks[0][i]
        if (rucksacks[1].includes(item) && rucksacks[2].includes(item)) {
          return priorities.indexOf(item) + 1
        }
      }
    })
    .reduce((a, b) => a+b)
)
