import fs from 'fs'

export default fs.readFileSync(process.stdin.fd)
  .toString()
  .split('\n')
  .filter(Boolean)
  .map(line => line.split(' ').map(Number))
