const message = document.getElementById("message");

/**
 * Set message of text for gameplay alert on screen
 * @param {string} text
 */
export default function set_msg(text) {
  message.textContent = text;
}
