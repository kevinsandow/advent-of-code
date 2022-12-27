import fs from 'fs'

const rock = 1
const paper = 2
const scissors = 3

const lost = 0
const draw = 3
const won = 6

const scores = {
  'A X': scissors + lost,
  'A Y': rock + draw,
  'A Z': paper + won,
  'B X': rock + lost,
  'B Y': paper + draw,
  'B Z': scissors + won,
  'C X': paper + lost,
  'C Y': scissors + draw,
  'C Z': rock + won,
}

console.log(
  fs.readFileSync('./input.txt')
    .toString()
    .split('\n')
    .reduce((memo, value) => memo + (scores[value] ?? 0), 0)
)
