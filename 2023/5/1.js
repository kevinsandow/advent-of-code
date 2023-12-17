import input from './input.js'

function lookup(value, map) {
  for (const [destination, source, range] of map) {
    if (value < source) continue
    if (value > source + range) continue

    return value - source + destination
  }

  return value
}

console.log(
  Math.min(...input.seeds.map((seed) => {
    const soil = lookup(seed, input['seed-to-soil'])
    const fertilizer = lookup(soil, input['soil-to-fertilizer'])
    const water = lookup(fertilizer, input['fertilizer-to-water'])
    const light = lookup(water, input['water-to-light'])
    const temperature = lookup(light, input['light-to-temperature'])
    const humidity = lookup(temperature, input['temperature-to-humidity'])
    return lookup(humidity, input['humidity-to-location'])
  }))
)
