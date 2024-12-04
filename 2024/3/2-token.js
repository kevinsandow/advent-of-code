import input from './input.js'

console.log(
  input
    .split('')
    .reduce((memo, token) => {
      switch (token) {
        case '0':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          switch (memo.state) {
            case 'mul(':
              return {
                ...memo,
                a: memo.a * 10 + +token,
              }
            case 'mul(,':
              return {
                ...memo,
                b: memo.b * 10 + +token,
              }
            default:
              return {
                ...memo,
                buffer: token,
              }
          }
        case 'o':
          switch (memo.state) {
            case 'd':
              return {
                ...memo,
                state: 'do',
              }
            default:
              return {
                ...memo,
                buffer: token,
              }
          }
        case 'n':
          switch (memo.state) {
            case 'do':
              return {
                ...memo,
                state: 'don',
              }
            default:
              return {
                ...memo,
                buffer: token,
              }
          }
        case '\'':
          switch (memo.state) {
            case 'don':
              return {
                ...memo,
                state: 'don\'',
              }
            default:
              return {
                ...memo,
                buffer: token,
              }
          }
        case 't':
          switch (memo.state) {
            case 'don\'':
              return {
                ...memo,
                state: 'don\'t',
              }
          }
          break
        case '(':
          switch (memo.state) {
            case 'do':
            case 'do\'t':
              return {
                ...memo,
                state: memo.state + token,
              }
            case 'mul':
              return {
                ...memo,
                state: 'mul(',
                a: 0,
                b: 0,
              }
            default: {
              return {
                ...memo,
                buffer: token,
              }
            }
          }
        case ',':
          break
        default:
          return {
            ...memo,
            buffer: token,
          }
      }
    }, {
      result: 0,
      mulEnabled: true,
      buffer: '',
      a: 0,
      b: 0,
    })
    .result
)
