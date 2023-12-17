import fs from 'fs'

export default fs.readFileSync(process.stdin.fd)
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .reduce((memo, line) => {
    if (line.startsWith('seeds: ')) {
      memo.data.seeds = line.split(':')[1].split(' ').filter(Boolean).map(Number)
      return memo
    }

    if (line.endsWith(' map:')) {
      memo.mode = line.substring(0, line.length - 5)
      return memo
    }

    memo.data[memo.mode] = memo.data[memo.mode] ?? []
    memo.data[memo.mode].push(line.split(' ').filter(Boolean).map(Number))

    return memo
  }, { mode: '', data: {}})
  .data
