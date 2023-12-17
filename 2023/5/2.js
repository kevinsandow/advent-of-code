import input from './input.js'

function lookup(value, map) {
  for (const [destination, source, range] of map) {
    if (value < source) continue
    if (value > source + range) continue

    return value - source + destination
  }

  return value
}

function* allSeeds(seeds) {
  for (let i = 0; i < seeds.length; i += 2) {
    for (let j = 0; j < seeds[i + 1]; j++) {
      yield seeds[i] + j
    }
  }
}

let total = 0
for (let i = 1; i < input.seeds.length; i += 2) {
  total += input.seeds[i]
}

let minLocation = Infinity
let progress = ''

let i = 0
for (const seed of allSeeds(input.seeds)) {
  const soil = lookup(seed, input['seed-to-soil'])
  const fertilizer = lookup(soil, input['soil-to-fertilizer'])
  const water = lookup(fertilizer, input['fertilizer-to-water'])
  const light = lookup(water, input['water-to-light'])
  const temperature = lookup(light, input['light-to-temperature'])
  const humidity = lookup(temperature, input['temperature-to-humidity'])
  const location = lookup(humidity, input['humidity-to-location'])

  console.log(`${seed} -> ${location}`)

  if (location < minLocation) {
    minLocation = location
  }

  i++
  let percent = (100 * i / total).toFixed(0)
  if (percent !== progress) {
    progress = percent
    console.log(`${progress}%`)
  }
}

console.log(minLocation)
