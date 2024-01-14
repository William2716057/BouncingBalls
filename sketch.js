//initialise starting positions
let x = 500;
let y = 500;
//define speeds
let xspeed = 5.5;
let yspeed = 2;

//prepare canvas
function setup() {
    createCanvas(640, 640);
    background(255);
}
//draw ball
function draw() {
    background(255);

    x = x + xspeed;
    y = y + yspeed;

    if (x > width || x < 0) {
        xspeed = xspeed * -1;
    }
    if (y > height - 70 || y < 0) {
        yspeed = yspeed * -1;
    }

    stroke(0);
    fill(255, 0, 0);
    strokeWeight(2);
    //starting position for ball 
    circle(x, y, 48);
    //draw floor
    fill(139, 69, 19)
    rect(0, 595, 720, 50);
}
