function checkName(){

let name =
document.getElementById("playerName").value.trim();

let error =
document.getElementById("error");

if(name==="Akram"){

document.body.innerHTML=`

<div id="startScreen">

<div class="overlay">

<h1>

Hi Akram ❤️

</h1>

<h2>

Shall we start the game?

</h2>

<br>

<button onclick="startGame()">

START

</button>

</div>

</div>

`;

}

else{

error.innerHTML=

"❌ Please enter the correct name.";

}

}

function startGame(){

alert("Game begins in Part 2!");

}
