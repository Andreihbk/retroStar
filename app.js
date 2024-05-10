/*import Game from '/Users/andreimaria/dev/retroStar/game.js';*/
import  Game  from './game.js'; // Assuming bullet.js is in the same directory

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const game = new Game(canvas);
    game.init();
});