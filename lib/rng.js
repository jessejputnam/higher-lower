/**
 * Generates a random number between 1 and the given integer, inclusive
 * @param {number} max_num
 * @returns {number}
 */
export default function rng(max_num) {
  return Math.floor(Math.random() * max_num) + 1;
}
