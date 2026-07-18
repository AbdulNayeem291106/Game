let playerName = "";

let gameRunning = false;

let playerRunning = false;

let playerPosition = 50;

let player;

let roadPosition = 0;

let animationFrame;



function checkName(){

    let input =
    document.getElementById("playerName").value.trim();


    let error =
    document.getElementById("error");


    if(input === "Akram"){


        playerName = input;


        document.getElementById("startScreen").style.display = "none";


        document.getElementById("gameScreen").style.display = "block";


        player =
        document.getElementById("player");


        startGame();


    }

    else{


        error.innerHTML =
        "❌ Please enter the correct name Akram";


    }

}




function startGame(){


    gameRunning = true;

    playerRunning = true;


    gameLoop();


    console.log(
        "Game Started for " + playerName
    );


}




function movePlayer(direction){


    if(direction === "left"){

        playerPosition -= 5;

    }


    if(direction === "right"){

        playerPosition += 5;

    }



    if(playerPosition < 20){

        playerPosition = 20;

    }


    if(playerPosition > 80){

        playerPosition = 80;

    }



    player.style.left =
    playerPosition + "%";


}




document
.getElementById("leftBtn")
.addEventListener("click",function(){

    movePlayer("left");

});



document
.getElementById("rightBtn")
.addEventListener("click",function(){

    movePlayer("right");

});




document.addEventListener("keydown",function(event){


    if(event.key === "ArrowLeft"){

        movePlayer("left");

    }


    if(event.key === "ArrowRight"){

        movePlayer("right");

    }


});





function gameLoop(){


    if(!gameRunning){

        return;

    }



    moveRoad();


    runAnimation();



    animationFrame =
    requestAnimationFrame(gameLoop);


}




function moveRoad(){


    roadPosition += 2;


    let road =
    document.getElementById("road");


    if(road){

        road.style.backgroundPositionY =
        roadPosition + "px";

    }


}




let runScale = 1;

let runDirection = 0.03;



function runAnimation(){


    if(!playerRunning){

        return;

    }


    runScale += runDirection;


    if(runScale > 1.08 || runScale < 0.95){

        runDirection =
        -runDirection;

    }


    player.style.transform =
    "translateX(-50%) scale(" + runScale + ")";


}
