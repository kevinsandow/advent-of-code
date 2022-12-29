import fs from 'fs'
import path from 'path'

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .filter((x) => !!x)
  .map((line) => line.split(' '))

const files = {}
let pwd = ''

for (const parts of input) {
  if (parts[0] === '$' && parts[1] === 'cd') {
    pwd = path.join(pwd, parts[2])
    files[pwd] = files[pwd] ?? 0
    continue
  }

  if (parts[0] === '$' && parts[1] === 'ls') {
    // Nothing to do here
    continue
  }

  if (parts[0] === 'dir') {
    // Nothing to do here
    continue
  }

  files[pwd] += +parts[0]
}

let total = 0

const dirSizes = Object.entries(files)
for (const [dir, size] of dirSizes) {
  const dirSize = dirSizes
    .filter(([subDir]) => dir !== subDir && subDir.startsWith(dir))
    .map(([, subSize]) => subSize)
    .reduce((a, b) => a + b, size)

  if (dirSize <= 100000) {
    total += dirSize
  }
}

console.log(total)
