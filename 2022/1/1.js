import fs from 'fs'

console.log(
  fs.readFileSync('./input.txt')
    .toString()
    .split('\n')
    .reduce((memo, value) => {
      if (value === '') {
        memo.unshift(0)
        return memo
      }

      memo[0] += +value
      return memo
    }, [0])
    .reduce((a, b) => a > b ? a : b)
)
