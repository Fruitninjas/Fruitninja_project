var requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!
var gameOver=new Image;
gameOver.src="maxresdefault.jpg";
var yoda=new Image;
yoda.src="imagesCAB0TPIV.jpg";
var myX=10, myY=400,myDY=0,broiSkociOtkakSumStypil,mishkaX=0,mishkaY=0, jumpX=4000, jumpY=4000, jumpDY;  
window.addEventListener("keyup", function (args) {    
myDY=-10;
}, false);

window.addEventListener("mousemove", function (args) {
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop
   
}, false);


function update() {     
myY=myY+myDY;
myDY=myDY+0.2;
if(myY>400){
myY=400;
myDY=0;
}
    setTimeout(update, 4); 
}

function draw() {      
    context.clearRect(0, 0, canvas.width, canvas.height);       
    context.globalAlpha = 1;                                    

    
    context.fillStyle = "#FF0000";//izbor na cvqt
    context.drawImage(yoda, myX, myY, 100, 150);

    
    requestAnimationFrame(draw);        
}
update();      
draw(); 