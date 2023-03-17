# Summative Assessment - Jesse Putnam

## Goals

- Prompt for Max Number

  [x] Prompt user for max number
  [x] Check user input for valid entries and reprompt with appropriate message
  [x] Round floating point numbers to integers
  [x] Select random number between 1 and provided number, inclusive

- Validate Guess

  [x] Prevent user from non-integer guesses with appropriate message
  [x] Prevent user from guessing numbers below range with message
  [x] Prevent user from guessing numbers above range with message

- Track guesses

  [x] Initialize array and use push() to add to guess history
  [x] Format win message to include comma-delimited guesses
  [x] Uses length property to count guesses (don't put in variable :frowning_face:)

- Prevent Duplicate Guesses
  [x] Check array for duplicate guess before adding to history
  [x] Display message to indicate duplicate guess

## Extras

- Added favicon for spiffy visual in browser
- Added welcome screen
  - Includes start button to start game loop
    - (I hate dealing with prompts on page load. It's very annoying when reloading, pressing cancel when you have a validation loop, etc)
  - Made it a modal with Bootstrap. Also made sure its static so clicking esc/on the background doesn't hide the modal. The init function is tied to the start button, so it needs to be pressed.
- Added a PLAY AGAIN button on a win which clears the history and lets you choose a new max number and play again!
- Included JSDoc comments for functions, so you can hover over to see parameters and function purpose
