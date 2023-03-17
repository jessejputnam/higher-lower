// Messages
const directions = "Choose a maximum number greater than 1.";
const is_nan = "Input needs to be a valid number.";
const too_low = "Input needs to be above 1.";

/**
 * Prompt user for number, looping until a valid input is given
 * @returns {number}
 */
export default function get_input() {
  let input = +prompt(directions);
  // Reprompt while invalid input
  while (isNaN(input) || input < 2) {
    if (isNaN(input)) input = +prompt(is_nan);
    if (input < 2) input = +prompt(too_low);
  }

  return Math.round(input);
}
