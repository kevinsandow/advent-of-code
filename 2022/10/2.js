import fs from 'fs'

console.log(
  fs.readFileSync('./input.txt')
    .toString()
    .split('\n')
    .filter((x) => !!x)
    .reduce(({ X, cycle, total, crt }, value) => {
      const [op, num] = value.split(' ')

      let newTotal = total
      let newCycle = cycle
      let newX = X
      let newCrt = crt

      switch (op) {
        case 'noop':
          newCrt += Math.abs(newX - newCycle % 40) < 2 ? '#' : '.'
          newCycle += 1
          newTotal += newCycle % 40 === 0 ? newCycle * X : 0

          return { X, cycle: newCycle, total: newTotal, crt: newCrt }
        case 'addx':
          newCrt += Math.abs(newX - newCycle % 40) < 2 ? '#' : '.'
          newCycle += 1
          newTotal += newCycle % 40 === 0 ? newCycle * newX : 0

          newCrt += Math.abs(newX - newCycle % 40) < 2 ? '#' : '.'
          newCycle += 1
          newTotal += newCycle % 40 === 0 ? newCycle * newX : 0
          newX += +num

          return { X: newX, cycle: newCycle, total: newTotal, crt: newCrt }
      }
    }, { X: 1, cycle: 0, total: 0, crt: '' })
    .crt.match(/.{40}/g).join('\n')
)
