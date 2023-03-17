// Messages
const directions = "Choose a maximum number greater than 1.";
const reminder =
  "Hey... like I said, it has to be a NUMBER and make sure it's above 1.";

/**
 * Prompt user for number, looping until a valid input is given
 * @returns {number}
 */
export default function get_input() {
  let input = +prompt(directions);
  // Reprompt while invalid input
  while (isNaN(input) || input < 2) input = +prompt(reminder);

  return Math.round(input);
}
