import fs from 'fs'

const rock = 1
const paper = 2
const scissors = 3

const lost = 0
const draw = 3
const won = 6

const scores = {
  'A X': rock + draw,
  'A Y': paper + won,
  'A Z': scissors + lost,
  'B X': rock + lost,
  'B Y': paper + draw,
  'B Z': scissors + won,
  'C X': rock + won,
  'C Y': paper + lost,
  'C Z': scissors + draw,
}

console.log(
  fs.readFileSync('./input.txt')
    .toString()
    .split('\n')
    .reduce((memo, value) => memo + (scores[value] ?? 0), 0)
)
