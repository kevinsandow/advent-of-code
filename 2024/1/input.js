import fs from 'fs'

export default fs.readFileSync(process.stdin.fd)
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map(l => l.split('   ').map(n => +n))
  .reduce(
    (memo, [first, second]) => ([[...memo[0], first], [...memo[1], second]]),
    [[], []],
  )
