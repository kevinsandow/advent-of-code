import input from './input.js'

const emptyColumns = input[0]
  .split('')
  .reduce(
    (memo, _, i) =>
      input.every((row) => row[i] !== '#') ? [...memo, i] : memo,
    [],
  )

const emptyRows = input.reduce(
  (memo, row, i) => (!row.includes('#') ? [...memo, i] : memo),
  [],
)

const galaxies = input
  .flatMap((row, rowNumber) =>
    [...row.matchAll(/#/g)].map((match) => [rowNumber, match.index]),
  )
  .map((galaxy) => [
    galaxy[0] + emptyRows.filter((r) => r < galaxy[0]).length * 999999,
    galaxy[1] + emptyColumns.filter((c) => c < galaxy[1]).length * 999999,
  ])

let sum = 0

for (let i = 0; i < galaxies.length; i++) {
  for (let j = i + 1; j < galaxies.length; j++) {
    sum +=
      Math.abs(galaxies[i][0] - galaxies[j][0]) +
      Math.abs(galaxies[i][1] - galaxies[j][1])
  }
}

console.log(sum)
