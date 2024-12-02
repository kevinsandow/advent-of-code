import input from './input.js'

console.log(
  input
    .map(set => {
      const sets = [set]
      while (sets[sets.length - 1].some(n => n !== 0)) {
        const nextSet = []
        for (let i = 1; i < sets[sets.length - 1].length; i++) {
          nextSet.push(sets[sets.length - 1][i] - sets[sets.length - 1][i - 1])
        }
        sets.push(nextSet)
      }
      return sets.reduceRight((a, b) => a + b[b.length - 1], 0)
    })
    .reduce((a, b) => a + b)
)
