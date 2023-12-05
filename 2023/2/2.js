import input from './input.js'

console.log(
  input
    .map(([, ds]) => {
      const colors = {
        red: 0,
        green: 0,
        blue: 0,
      }

      ds.forEach(cs => cs.forEach(v => colors[v[1]] = Math.max(colors[v[1]], v[0])))

      return colors.red * colors.green * colors.blue
    })
    .reduce((a, b) => a + b, 0)
)
