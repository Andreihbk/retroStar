export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.dx = 5;
        this.dy = 5;
    }

    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move(direction) {
        switch (direction) {
            case 'left':
                this.x -= this.dx;
                break;
            case 'right':
                this.x += this.dx;
                break;
            case 'up':
                this.y -= this.dy;
                break;
            case 'down':
                this.y += this.dy;
                break;
        }
    }
   /* updateBullets() {
        // Update position of each bullet and remove if off-screen
        this.bullets.forEach(bullet => {
            bullet.update();
        });
        this.bullets = this.bullets.filter(bullet => !bullet.isOffScreen(canvas.height));
    }
    
}*/
}

