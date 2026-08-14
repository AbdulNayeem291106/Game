let player=document.getElementById("player");

let x=window.innerWidth/2;

let startX=0;

document.addEventListener("touchstart",e=>{

startX=e.touches[0].clientX;

});

document.addEventListener("touchmove",e=>{

let move=e.touches[0].clientX;

if(move>startX){

x+=8;

}

else{

x-=8;

}

if(x<10)x=10;

if(x>window.innerWidth-90)

x=window.innerWidth-90;

player.style.left=x+"px";

startX=move;

});
