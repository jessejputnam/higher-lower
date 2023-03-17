import get_msg from "./get_msg.js";
import set_msg from "./set_msg.js";

/**
 * Check if the user guess is valid. Set appropriate message if not.
 * @param {number} guess
 * @param {number} max_num
 * @param {number[]} history
 * @returns {string | null}
 */
export default function is_valid(guess, max_num, history) {
  // User input errors
  // Input is not a number
  if (isNaN(guess)) return set_msg(get_msg("nan"));
  // Input is out of range
  if (guess < 1 || guess > max_num) return set_msg(get_msg("range"));
  // Input is a previous guess
  if (history.includes(guess)) return set_msg(get_msg("repeat", guess));
  // Input is floating point and not integer
  if (guess % 1 !== 0) return set_msg(get_msg("float"));

  return "valid";
}
