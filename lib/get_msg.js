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
 * @param {string} type
 * @param {number} guess - only needed for repeated guess
 * @param {number[]} history - only needed for win
 * @returns {string}
 */
export default function get_msg(type, guess = null, history = null) {
  if (type === "win") {
    // Win message
    const answer = history.at(-1);
    const tries =
      history.length + " " + (history.length === 1 ? "try" : "tries");
    const guess =
      (history.length === 1 ? "guess was " : "guesses were ") +
      history.slice(0, -1).join(", ") +
      ` and ${history.at(-1)}.`;

    return `You got it! The answer was ${answer}! It took you 
  ${tries}, and your ${guess}`;
  } else {
    return type === "repeat" ? err[type] + guess + "." : err[type];
  }
}
