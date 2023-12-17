import fs from 'fs'

export default fs.readFileSync(process.stdin.fd)
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .reduce((memo, line) => {
    if (line.startsWith('Time:')) {
      memo.times = line.split(':')[1].split(' ').filter(Boolean).map(Number)
    }

    if (line.startsWith('Distance:')) {
      memo.distances = line.split(':')[1].split(' ').filter(Boolean).map(Number)
    }

    return memo
  }, {})

