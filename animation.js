
var a; //reference the animation function
var bX = 400; //bambooX
var bY = 150;
var bW = 30;
var bH = 215;

var b2X = 450;
var b2Y = 190;
var b2W = 20;
var b2H = 175;

var sR =100;


function initialize() //sets up animation
{
    drawBackground();
    drawCircles();

    var ctx = document.getElementById("myCanvas").getContext("2d");
    //close to panda bamboo
    ctx.fillStyle = "#2d831d";
    ctx.fillRect(bX,bY,bW,bH);

    //right bamboo
    ctx.fillStyle = "#03b700";
    ctx.fillRect(b2X,b2Y,b2W,b2H);


    //sun
    ctx.beginPath();
    ctx.strokeStyle="#fdff00";
    ctx.width=2;
    ctx.arc(0,0,sR,0,2*Math.PI);
    ctx.fillStyle="#fdff00";
    ctx.fill();
    ctx.stroke();

}

function drawBackground()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    //grass
    ctx.fillStyle = "#6bb769";
    ctx.fillRect(0,365,500,700);

    /*sun
    ctx.beginPath();
    ctx.strokeStyle="#fdff00";
    ctx.width=2;
    ctx.arc(0,0,300,0,2*Math.PI);
    ctx.fillStyle="#fdff00";
    ctx.fill();
    ctx.stroke(); */

    //panda
    drawCircles();
}

function startAnimation()
{
    animate();
}

function animate() //lists of things that will animate (in order)
{
    a = requestAnimationFrame(animate); //enables animation
    drawBackground();
    moveHandRight();
    checkHand();
}

//var moveAmountH = 7;
var moveAmountY = -1;
var moveAmount2Y = -1;
var moveAmountR= 1;
function moveHandRight()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    bY = bY + moveAmountY;
    b2Y = b2Y + moveAmount2Y;
    sR = sR + moveAmountR;

    //sun
    ctx.beginPath();
    ctx.strokeStyle="#fdff00";
    ctx.width=2;
    ctx.arc(0,0,sR,0,2*Math.PI);
    ctx.fillStyle="#fdff00";
    ctx.fill();
    ctx.stroke();

    //close to panda bamboo
    ctx.fillStyle = "#2d831d";
    ctx.fillRect(bX,bY,bW,bH);

    //right bamboo
    ctx.fillStyle = "#03b700";
    ctx.fillRect(b2X,b2Y,b2W,b2H);

}
//y = 150
//2y = 190
function checkHand()
{
    if (bY < 40) {
        moveAmountY = moveAmountY * (-1);

    }
    if (bY > 150) {
        moveAmountY = moveAmountY * (-1);
    }
    if (b2Y < 75) {
        moveAmount2Y = moveAmount2Y * (-1);

    }
    if (b2Y > 190) {
        moveAmount2Y = moveAmount2Y * (-1);
    }
    if (sR > 150 )
    {
        moveAmountR = moveAmountR * (-1);
    }
    if (sR < 90 )
    {
        moveAmountR = moveAmountR * (-1);
    }

}
function drawCircles()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");


    //arms
    //left arm
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.arc(150,230,30,0,2*Math.PI);
    ctx.fillStyle= "#000000";
    ctx.fill();
    ctx.stroke();
    //right arm
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.arc(350,230,30,0,2*Math.PI);
    ctx.fillStyle= "#000000";
    ctx.fill();
    ctx.stroke();

    //legs
    //left leg
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.lineWidth=2;
    ctx.arc(180,330,35,0,2*Math.PI);
    ctx.fillStyle= "#000000";
    ctx.fill();
    ctx.stroke();
    //right leg
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.lineWidth=2;
    ctx.arc(320,330,35,0,2*Math.PI);
    ctx.fillStyle= "#000000";
    ctx.fill();
    ctx.stroke();

    //body
    //outer body
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.lineWidth=2;
    ctx.arc(250,250,90,0,2*Math.PI);
    ctx.fillStyle= "#000000";
    ctx.fill();
    ctx.stroke();
    //inner body
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.lineWidth=2;
    ctx.arc(250,250,85,0,2*Math.PI);
    ctx.fillStyle= "#ffffff";
    ctx.fill();
    ctx.stroke();

    //ears
    //left ear
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.lineWidth=2;
    ctx.arc(200,100,30,0,2*Math.PI);
    ctx.fillStyle= "#000000";
    ctx.fill();
    ctx.stroke();
    //right ear
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.lineWidth=2;
    ctx.arc(300,100,30,0,2*Math.PI);
    ctx.fillStyle= "#000000";
    ctx.fill();
    ctx.stroke();

    //head
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.lineWidth=2;
    ctx.arc(250,140,60,0,2*Math.PI);
    ctx.fillStyle= "#ffffff";
    ctx.fill();
    ctx.stroke();

    //nose
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.lineWidth=2;
    ctx.arc(250,150,15,0,2*Math.PI);
    ctx.fillStyle= "#000000";
    ctx.fill();
    ctx.stroke();

    //eyes
    //left eye
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.lineWidth=5;
    ctx.arc(230,120,7,0,2*Math.PI);
    ctx.fillStyle= "#ffffff";
    ctx.fill();
    ctx.stroke();
    //right eye
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.lineWidth=5;
    ctx.arc(270,120,7,0,2*Math.PI);
    ctx.fillStyle= "#ffffff";
    ctx.fill();
    ctx.stroke();


}

