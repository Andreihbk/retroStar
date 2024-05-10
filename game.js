class Player {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.keysPressed = {}; // Store the state of pressed keys
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    shoot() {
        // Create a new bullet and add it to the bullets array
        const bullet = new Bullet(this.x + this.width / 2 - 2.5, this.y);
        this.bullets.push(bullet);
        console.log("Player fired a bullet!");
    }

    handleKeyDown(e) {
        this.keysPressed[e.key] = true; // Set the corresponding key to true when pressed
    }

    handleKeyUp(e) {
        this.keysPressed[e.key] = false; // Set the corresponding key to false when released
    }

    update() {
        if (this.keysPressed['ArrowLeft']) {
            this.moveLeft();
        }
        if (this.keysPressed['ArrowRight']) {
            this.moveRight();
        }
        if (this.keysPressed['ArrowUp']) {
            this.moveUp();
        }
        if (this.keysPressed['ArrowDown']) {
            this.moveDown();
        }
        if(this.keysPressed[' ']){
            this.shoot;
        }
        //this.updateBullets(); // Update bullets position
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const player = new Player(canvas.width / 2, canvas.height - 50, 50, 50, 5);

    document.addEventListener('keydown', (e) => {
        player.handleKeyDown(e); // Call handleKeyDown method of the player object
    });

    document.addEventListener('keyup', (e) => {
        player.handleKeyUp(e); // Call handleKeyUp method of the player object
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(player.x, player.y, player.width, player.height);
      //  drawBullets();
    }

    function loop() {
        player.update(); // Call update method of the player object
        draw();
        requestAnimationFrame(loop);
    }

    loop();
});
