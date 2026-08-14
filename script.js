const input=document.getElementById("playerName");

const message=document.getElementById("message");

const button=document.getElementById("startBtn");

input.addEventListener("input",function(){

if(input.value.trim().toLowerCase()=="akram"){

message.style.color="green";

message.innerHTML="Hi Akram,<br>Shall we start the game?";

button.disabled=false;

}

else{

message.style.color="red";

message.innerHTML="Please enter the correct name.";

button.disabled=true;

}

});

button.onclick=function(){

window.location="game.html";

};
