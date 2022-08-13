// dog
class aDog {
    constructor() {
        this.limbs = [
            // body
            new dogLimb(+3,-1,100,35,"#4a3126"),
            // tail
            new dogLimb(+91, -9, 20, 10, "#4a3126"),
            new dogLimb(+100, -18, 20, 10, "#4a3126"),
            new dogLimb(+110, -30, 10, 20, "#4a3126"),
            // legs
            new dogLimb(+80, +33, 30, 11, "#4a3126"),
            new dogLimb(+70, +33, 10, 11, "black"),
            new dogLimb(+80, +44, 10, 21, "black"),
            new dogLimb(+100, +44, 10, 21, "#4a3126"),
            new dogLimb(+70, +64, 10, 11, "black"),
            new dogLimb(+13, +33, 45, 11, "#4a3126"),
            new dogLimb(-9, +44, 46, 11, "#4a3126"),
            new dogLimb(-9, +54, 10, 11, "#4a3126"),
            new dogLimb(+27, +54, 10, 11, "black"),
            new dogLimb(+17, +64, 10, 11, "black"),
            // head
            new dogLimb(+3, -30, 32, 30, "#4a3126"),
            new dogLimb(-7, -30, 30, 22, "#4a3126"),
            new dogLimb(+15, -40, 20, 30, "#4a3126"),
            new dogLimb(+25, -50, 10, 30, "#4a3126"),
            new dogLimb(+5, -50, 10, 10, "#4a3126")
        ]
    }

    drawDog(x, y, context) {
        this.limbs.forEach(function(entry) {
            entry.drawLimb(x, y, context)
        });
    }
}

class dogLimb {
    constructor(x,y,w,h,color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color}

    drawLimb(x, y, context) {
        context.beginPath();
        context.rect(x+this.x, y+this.y, this.w, this.h);
        context.fillStyle = this.color;
        context.fill();
    }
}

window.onload = function() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let x = 250;
    let y = 150;
    let coinx = Math.random() * (600-50);
	let coiny = Math.random() * (400-50);
    let waffles = new aDog();
    
    let t = Date.now();
    let speed = 300;
    let dir = 0;
    let score = 0;

    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    up.onmousedown = function() { dir = 4;}
    down.onmousedown = function() { dir = 3;}
    left.onmousedown = function() { dir = 2;}
    right.onmousedown = function() { dir = 1;}

    up.ontouchstart = function() { dir = 4;}
    down.ontouchstart = function() { dir = 3;}
    left.ontouchstart = function() { dir = 2;}
    right.ontouchstart = function() { dir = 1;}

    up.onmouseup = function() { dir = 0;}
    down.onmouseup = function() { dir = 0;}
    left.onmouseup = function() { dir = 0;}
    right.onmouseup = function() { dir = 0;}

    up.ontouchend = function() { dir = 0;}
    down.ontouchend = function() { dir = 0;}
    left.ontouchend = function() { dir = 0;}
    right.ontouchend = function() { dir = 0;}

    function draw() {
        let timePassed = (Date.now() - t) / 1000;
        t = Date.now();

        context.clearRect(0, 0, 600, 400);
        
        context.font = '28px Marker Felt';
        context.fillStyle = 'white';
        context.fillText("I found it " + score + " times!!", 20, 40);

        waffles.drawDog(x, y, context)

        //tennis ball         
        context.beginPath();
        context.arc(coinx, coiny, 20, 0, 2 * Math.PI);
        context.fillStyle="#ccff00";
        context.fill(); 

        context.beginPath();
        context.moveTo(coinx, coiny-20);
        context.quadraticCurveTo(coinx, coiny, (coinx+20), coiny);
        context.strokeStyle="white";
        context.lineWidth=4;
        context.stroke();
 
        context.beginPath();
        context.moveTo(coinx-20, coiny);
        context.quadraticCurveTo(coinx, coiny, (coinx), coiny+20);
        context.strokeStyle="white";
        context.lineWidth=4;
        context.stroke();

        if(dir == 1) { 
            if(x+100 < 600) {
                x += (speed * timePassed);
            }
        }
        else if(dir == 2) { 
            if(x > 0) {
                x -= (speed * timePassed);
            }
        }
        else if(dir == 3) { 
            if(y+100 < 400) {
                y += (speed * timePassed);
            }
        }
        else if(dir == 4) { 
            if(y > 0) {
                y -= (speed * timePassed);
            }
        }

        if (coinx <= x+100 && x <= coinx+50 && coiny <= y+100 && y <= coiny+50) {
            score++;
            coinx = Math.random() * (600-50);
            coiny = Math.random() * (400-50);
        }

        window.requestAnimationFrame(draw);
    }
    draw();



}
