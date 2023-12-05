import fs from 'fs'

export default fs.readFileSync(process.stdin.fd)
  .toString()
  .split('\n')
  .filter((x) => !!x)
