window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 250;
    var y = 150;
    var coinx = Math.random() * (600-50);
	var coiny = Math.random() * (400-50);
    
    var t = Date.now();
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
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();

        context.clearRect(0, 0, 600, 400);
        
        context.font = '28px Marker Felt';
        context.fillStyle = 'white';
        context.fillText("I found it " + score + " times!!", 20, 40);

        context.beginPath();
        context.rect(x+3, y-1, 100, 35);
        context.fillStyle="#4a3126";
        context.fill();

        context.beginPath();
        context.rect(x+91, y-9, 20, 10);
        context.fillStyle="#4a3126";
        context.fill();

        context.beginPath();
        context.rect(x+100, y-18, 20, 10);
        context.fillStyle="#4a3126";
        context.fill();

        context.beginPath();
        context.rect(x+110, y-30, 10, 20);
        context.fillStyle="#4a3126";
        context.fill();

        context.beginPath();
        context.rect(x+80, y+33,30, 11);
        context.fillStyle="#4a3126";
        context.fill();

        context.beginPath();
        context.rect(x+70, y+33,10, 11);
        context.fillStyle="black";
        context.fill();

        context.beginPath();
        context.rect(x+80, y+44,10, 21);
        context.fillStyle="black";
        context.fill();

        context.beginPath();
        context.rect(x+100, y+44,10, 21);
        context.fillStyle="#4a3126";
        context.fill();

        context.beginPath();
        context.rect(x+70, y+64,10, 11);
        context.fillStyle="black";
        context.fill();

        context.beginPath();
        context.rect(x+13, y+33,45, 11);
        context.fillStyle="#4a3126";
        context.fill();

        context.beginPath();
        context.rect(x-9, y+44,46, 11);
        context.fillStyle="#4a3126";
        context.fill();

        context.beginPath();
        context.rect(x-9, y+54,10, 11);
        context.fillStyle="#4a3126";
        context.fill();

        context.beginPath();
        context.rect(x+27, y+54,10, 11);
        context.fillStyle="black";
        context.fill();

        context.beginPath();
        context.rect(x+17, y+64,10, 11);
        context.fillStyle="black";
        context.fill();

        context.beginPath();
        context.rect(x+3, y-30, 32, 30);
        context.fillStyle="#4a3126";
        context.fill();

        context.beginPath();
        context.rect(x-7, y-30, 30, 22);
        context.fillStyle="#4a3126";
        context.fill();

        context.beginPath();
        context.rect(x+15, y-40, 20, 30);
        context.fillStyle="#4a3126";
        context.fill();

        context.beginPath();
        context.rect(x+25, y-50, 10, 30);
        context.fillStyle="#4a3126";
        context.fill();

        context.beginPath();
        context.rect(x+5, y-50, 10, 10);
        context.fillStyle="#4a3126";
        context.fill();

        
        
        
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