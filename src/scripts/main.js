'use strict';

// Uncomment the next lines to use your game instance in the browser
const Game = require('../modules/Game.class');
const game = new Game([
  [0, 2, 32, 16],
  [64, 32, 16, 8],
  [32, 16, 8, 4],
  [16, 8, 4, 2],
]);

game.getScore();

// Write your code here
