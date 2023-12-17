import input from './input.js'

const emptyColumns = input[0]
  .split('')
  .reduce((memo, _, i) => input.every((row) => row[i] !== '#') ? [...memo, i] : memo, [])

const emptyRows = input
  .reduce((memo, row, i) => !row.includes('#') ? [...memo, i] : memo, [])

const galaxies = input
  .flatMap((row, rowNumber) =>
    [...row.matchAll(/#/g)].map((match) => [rowNumber, match.index])
  ).map((galaxy) => [
    galaxy[0] + emptyRows.filter((row) => row < galaxy[0]).length,
    galaxy[1] + emptyColumns.filter((column) => column < galaxy[1]).length,
  ])

let sum = 0

for (let i = 0; i < galaxies.length; i++) {
  for (let j = i + 1; j < galaxies.length; j++) {
    sum += Math.abs(galaxies[i][0] - galaxies[j][0]) + Math.abs(galaxies[i][1] - galaxies[j][1])
  }
}

console.log(sum)
