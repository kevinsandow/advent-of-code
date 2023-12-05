import fs from 'fs'

export default fs.readFileSync(process.stdin.fd)
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map((line) => {
    const [card, numbers] = line.split(': ')
    const [winningNumbers, haveNumbers] = numbers.split(' | ')

    return {
      card: card.match(/\d+/)[0],
      winningNumbers: winningNumbers.split(' ').filter(Boolean).map(Number),
      haveNumbers: haveNumbers.split(' ').filter(Boolean).map(Number),
    }
  })
