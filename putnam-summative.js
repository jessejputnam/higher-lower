// No need for strict mode as HTML loads script as a module

// Imports
import get_input from "./lib/get_input.js";
import rng from "./lib/rng.js";
import set_msg from "./lib/set_msg.js";
import get_msg from "./lib/get_msg.js";
import is_valid from "./lib/is_valid.js";

// DOM Variables
const start_btn = document.getElementById("start-game");
const instructions = document.getElementById("instructions");
const input = document.getElementById("input");
const guess_btn = document.getElementById("guess-btn");
const reset_btn = document.getElementById("reset-btn");

// ###################### Initial State ##################

// Initialize game state variables
const history = [];
let max_num, answer;

// Show modal on load for start game
window.onload = function () {
  $("#modal").modal("show");
};

// Initialize gameplay on start click
start_btn.addEventListener("click", init);

// ####################### GAME PLAY #######################

// Gameplay loop on guess click
guess_btn.addEventListener("click", game_loop);
// Start new game on reset click
reset_btn.addEventListener("click", init);

/**
 * Gameplay loop via guess click
 * @returns {void}
 */
function game_loop() {
  // Don't allow empty input
  if (input.value === "") return;

  // Convert input string to number and store as guess
  const guess = +input.value;
  // Reset input value
  input.value = "";

  // Check for valid guess, set error message if necessary
  if (is_valid(guess, max_num, history) !== "valid") return;

  // Add guess to history
  history.push(guess);

  // Win scenario
  if (guess === answer) {
    // Show reset button
    reset_btn.classList.remove("d-none");
    // Hide guess button
    guess_btn.classList.add("d-none");
    // Disable input to stop further guesses
    input.disabled = true;

    // Set win message to display
    return set_msg(get_msg("win", null, history));
  }

  // Valid guess, but incorrect, set appropriate message
  if (guess < answer) set_msg(get_msg("low"));
  if (guess > answer) set_msg(get_msg("high"));
}

/**
 * Initializes state for new game
 * @returns {void}
 */
function init() {
  // Reset gameplay message
  set_msg("");
  // Hide reset button if visible
  reset_btn.classList.add("d-none");
  // Show guess button if hidden
  guess_btn.classList.remove("d-none");
  // Re-enable the input for guesses
  input.disabled = false;
  // Erase history of array
  history.length = 0;
  // Prompt user for new max number
  max_num = get_input();
  // Add formatted max number to instructions
  instructions.textContent = new Intl.NumberFormat("en-US").format(max_num);
  // Get a new randomly generated answer
  answer = rng(max_num);
}
