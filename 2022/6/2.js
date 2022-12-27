import fs from 'fs'

console.log(
  fs.readFileSync('./input.txt')
    .toString()
    .split('\n')
    .filter((x) => !!x)
    .map((input) => {
      for (let i = 14; i < input.length; i++) {
        if ([...new Set(input.slice(i - 14, i).split(''))].length === 14) {
          return i
        }
      }
    })
    .shift()
)
