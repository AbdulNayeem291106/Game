let playerName = "";

let gameRunning = false;


function checkName(){

    let input = document
    .getElementById("playerName")
    .value
    .trim();


    let error = document
    .getElementById("error");


    if(input === "Akram"){


        playerName = input;


        // Hide name screen
        document
        .getElementById("startScreen")
        .style.display = "none";


        // Show game screen
        document
        .getElementById("gameScreen")
        .style.display = "block";


        startGame();


    }

    else{


        error.innerHTML =
        "❌ Please enter the correct name Akram";


    }

}



function startGame(){

    gameRunning = true;

    console.log(
        "Game started for " + playerName
    );

}
