import input from './input.js'

function hash(label) {
  return label
    .split('')
    .map((c) => c.charCodeAt(0))
    .reduce((hash, n) => ((hash + n) * 17) % 256, 0)
}

console.log(
  input
    .reduce((boxes, operation) => {
      if (operation.includes('=')) {
        const [label, value] = operation.split('=')
        const n = hash(label)
        const focalLength = +value

        const lens = boxes[n].find((l) => l.label === label)
        if (lens) {
          lens.focalLength = +focalLength
        } else {
          boxes[n].push({ label, focalLength: +focalLength })
        }
      }

      if (operation.includes('-')) {
        const [label] = operation.split('-')
        const n = hash(label)

        boxes[n] = boxes[n].filter((l) => l.label !== label)
      }

      return boxes
    }, new Array(256).fill(0).map(_ => []))
    .flatMap((box, b) => box.map((lens, l) => (b+1) * (l+1) * lens.focalLength))
    .reduce((a, b) => a + b)
)
