import fs from 'fs'

console.log(
  fs.readFileSync('./input.txt')
    .toString()
    .split('\n')
    .filter((x) => !!x)
    .map((input) => {
      for (let i = 4; i < input.length; i++) {
        if ([...new Set(input.slice(i - 4, i).split(''))].length === 4) {
          return i
        }
      }
    })
    .shift()
)
