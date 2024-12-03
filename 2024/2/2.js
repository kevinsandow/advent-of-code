import input from './input.js'

const isSafe = l => {
  const delta = l.slice(0, -1).map((n, i) => n - l[i + 1])
  return delta.every(n => n > 0 && n <= 3) || delta.every(n => n < 0 && n >= -3)
}

console.log(
  input
    .map(l => (isSafe(l) || l.some((_, i) => isSafe([...l.slice(0, i), ...l.slice(i + 1)]))) ? 1 : 0)
    .reduce((a, b) => a + b, 0)
)
