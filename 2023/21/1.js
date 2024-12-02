import input from './input.js'

let map = [...input]
for (let i = 0; i < 64; i++) {
  const newMap = new Array(map.length).fill(0).map((_, i) => new Array(map[0].length))
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      newMap[y][x] = map[y][x]

      if (map[y][x] === -1) {
        continue
      }

      if (map[y][x] === 1) {
        newMap[y][x] = 0
        continue
      }

      if (y > 0 && map[y - 1][x] === 1) {
        newMap[y][x] = 1
      }

      if (y < map.length - 1 && map[y + 1][x] === 1) {
        newMap[y][x] = 1
      }

      if (x > 0 && map[y][x - 1] === 1) {
        newMap[y][x] = 1
      }

      if (x < map[y].length - 1 && map[y][x + 1] === 1) {
        newMap[y][x] = 1
      }
    }
  }
  map = newMap
}

console.log(map.flatMap(l => l).filter(n => n === 1).length)
