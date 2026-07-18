/* ==========================
   VERSION 2 - SCRIPT.JS
   PART 1
   NAME VERIFICATION + GAME START
========================== */


let playerName = "";



function checkName(){


    let input =
    document.getElementById("playerName").value.trim();


    let error =
    document.getElementById("error");



    if(input === "Akram"){


        playerName = input;


        document.getElementById("startScreen").style.display = "none";


        document.getElementById("gameScreen").style.display = "block";


        startGame();



    }

    else{


        error.innerHTML =
        "❌ Please enter the correct name.";


    }


}




function startGame(){


    console.log("Game Started for " + playerName);


} 

/* ==========================
   VERSION 2 - SCRIPT.JS
   PART 2
   PLAYER MOVEMENT + CONTROLS
========================== */


let playerPosition = 50; // percentage position



let player =
document.getElementById("player");



function movePlayer(direction){


    if(direction === "left"){


        playerPosition -= 5;


    }


    if(direction === "right"){


        playerPosition += 5;


    }



    // Road boundary limit

    if(playerPosition < 20){

        playerPosition = 20;

    }


    if(playerPosition > 80){

        playerPosition = 80;

    }



    player.style.left =
    playerPosition + "%";


}




// Left button

document
.getElementById("leftBtn")
.addEventListener("touchstart", function(){


    movePlayer("left");


});



// Right button

document
.getElementById("rightBtn")
.addEventListener("touchstart", function(){


    movePlayer("right");


});




// Mouse support (testing)

document
.getElementById("leftBtn")
.addEventListener("click", function(){


    movePlayer("left");


});


document
.getElementById("rightBtn")
.addEventListener("click", function(){


    movePlayer("right");


});




// Keyboard controls

document.addEventListener("keydown",function(event){


    if(event.key === "ArrowLeft"){


        movePlayer("left");


    }



    if(event.key === "ArrowRight"){


        movePlayer("right");


    }


});

/* ==========================
   VERSION 2 - SCRIPT.JS
   PART 3
   GAME LOOP + RUNNING EFFECT
========================== */


/* 
   GAME VARIABLES
*/


let gameRunning = false;


let roadPosition = 0;


let animationFrame;



let playerRunning = false;



/*
   START GAME FUNCTION
   (Updated)
*/


function startGame(){


    gameRunning = true;


    playerRunning = true;


    gameLoop();


    console.log("Game Started for " + playerName);


}





/*
   MAIN GAME LOOP
*/


function gameLoop(){


    if(!gameRunning){

        return;

    }



    // Move road background

    moveRoad();



    // Player running animation

    runAnimation();



    animationFrame =
    requestAnimationFrame(gameLoop);


}




/*
   ROAD MOVEMENT
*/


function moveRoad(){


    roadPosition += 2;



    let road =
    document.getElementById("road");



    if(road){

        road.style.backgroundPositionY =
        roadPosition + "px";

    }



}




/*
   PLAYER RUNNING EFFECT
*/


let runScale = 1;


let runDirection = 0.03;



function runAnimation(){


    if(!playerRunning){

        return;

    }



    runScale += runDirection;



    if(runScale > 1.08 ||
       runScale < 0.95){


        runDirection =
        -runDirection;


    }



    player.style.transform =
    "translateX(-50%) scale("+
    runScale+
    ")";

}




/*
   STOP GAME
   (Used later after gift box)
*/


function stopGame(){


    gameRunning = false;


    playerRunning = false;


    cancelAnimationFrame(animationFrame);


} 

