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

// Preload modal for start game
window.onload = function () {
  $("#modal").modal("show");
};

// ####################### GAME PLAY #######################

// Initialize game state variables
const history = [];
let max_num, answer;

// Initialize gameplay on start click
start_btn.addEventListener("click", init);
// Gameplay loop on guess click
guess_btn.addEventListener("click", game_loop);
// Start new game on reset click
reset_btn.addEventListener("click", init);

/**
 * Gameplay loop on guess
 * @returns {void}
 */
function game_loop() {
  const guess = +input.value;
  input.value = "";

  // Check for valid guess
  if (is_valid(guess, max_num, history) !== "valid") return;

  // Add guess to history
  history.push(guess);

  // Win scenario
  if (guess === answer) {
    reset_btn.classList.remove("d-none");
    guess_btn.classList.add("d-none");
    input.disabled = true;

    return set_msg(get_msg("win", null, history));
  }

  // Valid guess, but incorrect
  if (guess < answer) set_msg(get_msg("low"));
  if (guess > answer) set_msg(get_msg("high"));
}

/**
 * Initializes state for new game
 * @returns {void}
 */
function init() {
  set_msg("");
  reset_btn.classList.add("d-none");
  guess_btn.classList.remove("d-none");
  input.disabled = false;
  history.length = 0;
  max_num = get_input();
  instructions.textContent = `Guess a number between 1 and ${max_num}`;
  answer = rng(max_num);
}
