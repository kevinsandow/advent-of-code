import input from './input.js'

console.log(
  input
    .split('')
    .reduce((memo, token) => {
      const buffer = memo.buffer + token
      if (buffer.endsWith('do()')) {
        return {
          ...memo,
          mulEnabled: true,
          buffer: '',
        }
      }

      if (buffer.endsWith('don\'t()')) {
        return {
          ...memo,
          mulEnabled: false,
          buffer: '',
        }
      }

      const match = buffer.match(/mul\((\d+),(\d+)\)$/)
      if (match) {
        return {
          ...memo,
          result: memo.mulEnabled ? memo.result + match[1] * match[2] : memo.result,
          buffer: '',
        }
      }

      return {
        ...memo,
        buffer,
      }
    }, {
      result: 0,
      mulEnabled: true,
      buffer: '',
    })
    .result
)
