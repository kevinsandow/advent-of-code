import fs from 'fs'

export default fs.readFileSync(process.stdin.fd)
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map(g => {
    const gs = g.split(': ')

    return [
      +gs[0].substring(5),
      gs[1].split('; ')
        .map(d => d.split(', ').map(c => c.split(' ').map(
          v => (Number(v) || v)
        ))),
    ]
  })
