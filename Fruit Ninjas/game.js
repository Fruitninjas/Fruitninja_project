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
var BEG=new Image;
BEG.src="block_end#1.png";
var MID=new Image;
MID.src="block_middle#1.png";
var END=new Image;
END.src="block_end#2.png";
var IGame=false;
var myX=10, myY=400,myDY=0,mouseX,mouseY;  
var x=0,x1=0;
var jumps = 0;
var moveR = false,moveL = false;
window.addEventListener("keydown", function (args) {   
    var arg = args.keyCode;
    console.log(arg);
    if(IGame){
        if(arg  == 87 && jumps < 2){
            jumps++;
            myDY=-10;
        }
        if(arg  == 65){ 
            moveL = true;
            moveR = false;
        }
        if(arg  == 68){ 
            moveR = true;
            moveL = false;
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
            myX-=3;
        }
        if(moveR){
            myX+=3;
        }
        //move
        
        //gravity
        myY=myY+myDY;
        myDY=myDY+0.4;
        if(myY>400){
            myY=400;
            myDY=0;
        }
        if(myY == 400){
            jumps = 0;
        }
        //gravity

        //sprite
        x1++;
        if(x1>10){
            x++;
            x1=0;
        }
        if(x>10){
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
        if(!moveL && !moveR){
            if(jumps == 2){
                context.drawImage(Ninja,x*20,120,20,40, myX, myY, 50, 70);
            }else{
                context.drawImage(Ninja,x*20,0,20,40, myX, myY, 50, 70);
            }
        }
        if(moveR){
            
            if(jumps == 2){
                context.drawImage(Ninja,x*20,120,20,40, myX, myY, 50, 70);
            }else{
                context.drawImage(Ninja,x*20,40,20,40, myX, myY, 50, 70);
            }
        }if(moveL){
            if(jumps == 2){
                context.drawImage(Ninja,x*20,260,20,40, myX, myY, 50, 70);
            }else{
                context.drawImage(Ninja,x*20,80,20,40, myX, myY, 50, 70);
            }
        }
    }
    
    requestAnimationFrame(draw);        
}
InGame();
updateGame();      
draw();