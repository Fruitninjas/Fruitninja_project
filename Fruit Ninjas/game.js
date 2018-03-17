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
BEG.src="be.png";
var MID=new Image;
MID.src="mi.png";
var END=new Image;
END.src="en.png";
var map1 = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,3,0,0,0,0,0,1,2,2,2,2,2,3,0,0,0,0,0,0,0],
    [0,0,0,1,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,3,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,2,2,2,3,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ]



var IGame=false;
var myX=10, myY=400,myDY=0,mouseX,mouseY;  
var x=0,x1=0;
var jumps = 0;
var sball = false,rotatedR = true;
var moveR = false,moveL = false;
window.addEventListener("keydown", function (args) {   
    var arg = args.keyCode;
    console.log(arg);
    if(IGame){
        if(arg  == 87 && jumps < 2){
            if(sball){}
            jumps++;
            myDY=-10;
        }
        if(arg  == 65){ 
            moveL = true;
            moveR = false;
            rotatedR = false;
        }
        if(arg  == 68){ 
            moveR = true;
            moveL = false;
            rotatedR = true;
        }
        if(arg  == 32){ 
            sball = !sball;
        }
    }
    console.log(arg);
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
    for(var i=0;i<30;i++){
        for(var j=0;j<40;j++){
            if(map1[i][j] == 1 ||map1[i][j] == 2 ||map1[i][j] == 3){
                if((myX >= j*20 && myX <= (j+1)*20) ||((myX+50) >= j*20 && (myX+50) <= (j+1)*20)){
                    if((myY+70) <= (i+1)*20 && (myY+70) > i*20){
                        myY = i*20 - 70;
                        myDY = 0;
                        jumps =0;
                    }
                }
            }
        }
    }
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
        myDY=myDY+0.5;
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

    for(var i=0;i<30;i++){
        for(var j=0;j<40;j++){
            if(map1[i][j] == 1){
                context.drawImage(BEG, j*20,i*20,20,20);
            }
            if(map1[i][j] == 2){
                context.drawImage(MID, j*20,i*20,20,20);
            }
            if(map1[i][j] == 3){
                context.drawImage(END, j*20,i*20,20,20);
            }
        }
    }


    if(IGame){
        if(!moveL && !moveR){
            if(jumps == 2 || sball){
                if(rotatedR){
                    context.drawImage(Ninja,x*20,300,20,40, myX, myY, 50, 70);
                }else{
                    context.drawImage(Ninja,x*20,120,20,40, myX, myY, 50, 70);
                }
            }else{
                context.drawImage(Ninja,x*20,0,20,40, myX, myY, 50, 70);
            }
        }
        if(moveR){
            
            if(jumps == 2 || sball){
                context.drawImage(Ninja,x*20,300,20,40, myX, myY, 50, 70);
            }else{
                context.drawImage(Ninja,x*20,40,20,40, myX, myY, 50, 70);
            }
        }
        if(moveL){
            if(jumps == 2 || sball){
                context.drawImage(Ninja,x*20,120,20,40, myX, myY, 50, 70);
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