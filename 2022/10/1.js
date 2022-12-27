import fs from 'fs'

console.log(
  fs.readFileSync('./input.txt')
    .toString()
    .split('\n')
    .filter((x) => !!x)
    .reduce(({ X, cycle, total }, value) => {
      const [op, num] = value.split(' ')

      let newTotal = total
      let newCycle = cycle
      let newX = X

      switch (op) {
        case 'noop':
          newCycle += 1
          newTotal += (newCycle - 20) % 40 === 0 ? newCycle * X : 0

          return { X, cycle: newCycle, total: newTotal }
        case 'addx':
          newCycle += 1
          newTotal += (newCycle - 20) % 40 === 0 ? newCycle * newX : 0

          newCycle += 1
          newTotal += (newCycle - 20) % 40 === 0 ? newCycle * newX : 0
          newX += +num

          return { X: newX, cycle: newCycle, total: newTotal }
      }
    }, { X: 1, cycle: 0, total: 0 })
    .total
)
