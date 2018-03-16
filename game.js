var requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");
var Ninja=new Image;
Ninja.src="ninja_sprite.png";
var IGame=false;
var myX=10, myY=400,myDY=0,mouseX,mouseY;  
var x=0,x1=0;
var moveR = false,moveL = false;
window.addEventListener("keydown", function (args) {   
    var arg = args.keyCode;
    console.log(arg);
    if(IGame){
        if(arg  == 87){ 
            myDY=-10;
        }
        if(arg  == 65){ 
            moveL = true;
        }
        if(arg  == 68){ 
            moveR = true;
        }
    }
}, false);
window.addEventListener("keyup", function (args) {   
    var arg = args.keyCode;
    console.log(arg);
    if(IGame){
        if(arg  == 65){ 
            moveL = false;
        }
        if(arg  == 68){ 
            moveR = false;
        }
    }
}, false);
function InGame(){
    IGame = true;
}
window.addEventListener("mousemove", function (args) {
    mouseX=args.clientX-canvas.offsetLeft;
    mouseY=args.clientY-canvas.offsetTop
   
}, false);


function updateGame() {     
    if(IGame){
        
        //move
        if(moveL){
            myX--;
            myX--;
            myX--;
        }
        if(moveR){
            myX++;
            myX++;
            myX++;
        }
        //move
        
        //gravity
        myY=myY+myDY;
        myDY=myDY+0.4;
        if(myY>400){
            myY=400;
            myDY=0;
        }
        //gravity

        //sprite
        x1++;
        if(x1>30){
            x++;
            x1=0;
        }
        if(x>5){
            x=0;
        }
        //sprite
    }
    setTimeout(updateGame, 10); 
}

function draw() {      
    context.clearRect(0, 0, canvas.width, canvas.height);       
    context.globalAlpha = 1;                                    
    if(IGame){
        context.drawImage(Ninja,x*20,0,20,40, myX, myY, 50, 70);
    }
    
    requestAnimationFrame(draw);        
}
InGame();
updateGame();      
draw();