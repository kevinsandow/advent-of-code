import fs from 'fs'

console.log(
  fs.readFileSync('./input.txt')
    .toString()
    .split('\n')
    .filter((x) => !!x)
    .map((input) => {
      const a = input.split(',').map((x) => x.split('-').map(Number))

      if (a[0][0] >= a[1][0] && a[0][1] <= a[1][1]) {
        return 1
      }

      if (a[0][0] <= a[1][0] && a[0][1] >= a[1][1]) {
        return 1
      }

      return 0
    })
    .reduce((a, b) => a+b)
)
