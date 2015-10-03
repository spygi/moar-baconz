var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({

  TOGGLE_AVAILABILITY: null, // Toggle availability of a specified product
  BUY: null, // Item state (RED)
  MAYBE_BUY: null, // Item state (YELLOW)
  DO_NOT_BUY: null, // Item state (GREEN)
  
});