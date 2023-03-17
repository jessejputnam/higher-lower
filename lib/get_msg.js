const err = {
  nan: "That is not a number!",
  range: "That number is not in range, try again.",
  low: "Not quite... try a higher number.",
  high: "Too high. Try something lower.",
  repeat: "Oops! Try again! You already guessed ",
  float: "Input must be a whole number; decimals are not allowed."
};

/**
 * Returns the required message to be displayed
 * @param {string} type - type of message
 * @param {number} guess - only needed for repeated guess
 * @param {number[]} history - only needed for win
 * @returns {string}
 */
export default function get_msg(type, guess = null, history = null) {
  if (type === "win") {
    // Win message
    const answer = history.at(-1);
    const guesses = `${history.slice(0, -1).join(", ")} and ${answer}.`;

    // Result written out as string
    const result =
      history.length +
      " " +
      (history.length === 1
        ? "try only!"
        : `tries. Your guesses were ${guesses}`);

    return `You got it! The answer was ${answer}! It took you 
  ${result}`;
  } else {
    return type === "repeat" ? err[type] + guess + "." : err[type];
  }
}
