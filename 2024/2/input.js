import fs from 'fs'

export default fs.readFileSync(process.stdin.fd)
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map(l => l.split(' ').map(n => +n))
