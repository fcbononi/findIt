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

        //dog
        class dogObject {
            constructor(x,y,w,h,color) {
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.color = color;
            }
            drawObject() {
                context.beginPath();
                context.rect(this.x, this.y, this.w, this.h);
                context.fillStyle = this.color;
                context.fill();
            }
        }
    
        body = new dogObject(x+3,y-1,100,35,"#4a3126");
        body.drawObject();
    
        tail1 = new dogObject(x+91, y-9, 20, 10, "#4a3126");
        tail1.drawObject();        
    
        tail2 = new dogObject(x+100, y-18, 20, 10, "#4a3126");
        tail2.drawObject();
    
        tail3 = new dogObject(x+110, y-30, 10, 20, "#4a3126");
        tail3.drawObject();    
          
        leg1 = new dogObject(x+80, y+33, 30, 11, "#4a3126");
        leg1.drawObject();
    
        leg2 = new dogObject(x+70, y+33, 10, 11, "black");
        leg2.drawObject();
    
        leg3 = new dogObject(x+80, y+44, 10, 21, "black");
        leg3.drawObject();

        leg4 = new dogObject(x+100, y+44, 10, 21, "#4a3126");
        leg4.drawObject();

        leg5 = new dogObject(x+70, y+64, 10, 11, "black");
        leg5.drawObject();
    
        leg6 = new dogObject(x+13, y+33, 45, 11, "#4a3126");
        leg6.drawObject();

        leg7 = new dogObject(x-9, y+44, 46, 11, "#4a3126");
        leg7.drawObject();

        leg8 = new dogObject(x-9, y+54, 10, 11, "#4a3126");
        leg8.drawObject();
        
        leg9 = new dogObject(x+27, y+54, 10, 11, "black");
        leg9.drawObject();

        leg10 = new dogObject(x+17, y+64, 10, 11, "black");
        leg10.drawObject();

        head1 = new dogObject(x+3, y-30, 32, 30, "#4a3126");
        head1.drawObject();

        head2 = new dogObject(x-7, y-30, 30, 22, "#4a3126");
        head2.drawObject();

        head3 = new dogObject(x+15, y-40, 20, 30, "#4a3126");
        head3.drawObject();

        head4 = new dogObject(x+25, y-50, 10, 30, "#4a3126");
        head4.drawObject();

        head5 = new dogObject(x+5, y-50, 10, 10, "#4a3126");
        head5.drawObject();

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
