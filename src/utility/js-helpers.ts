/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export { getRandomInt }
