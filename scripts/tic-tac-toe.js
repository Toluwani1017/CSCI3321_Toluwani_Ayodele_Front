var gameOver = false;
var currentPlayer = 'X';

var totalMove = 0;


function placeMarker(spotId){
    if (!gameOver){
    var spot = document.getElementById(spotId);
    if (spot.innerHTML === ''){
        spot.innerHTML = currentPlayer;
        if (currentPlayerWon()){
            updateGameStatus();
        }
        else{
            totalMove++;
        }
        
    }
    currentPlayer = 'O';
    }
}



function currentPlayerWon(){

    var v1 = "1";
    var v2 = "2";
    var v3 = "3";
    var v4 = "4";
    var v5 = "5";
    var v6 = "6";
    var v7 = "7";
    var v8 = "8";
    var v9 = "9";

    var s1 = document.getElementById('square1');
    var s2 = document.getElementById('square2');
    var s3 = document.getElementById('square3');
    var s4 = document.getElementById('square4');
    var s5 = document.getElementById('square5');
    var s6 = document.getElementById('square6');
    var s7 = document.getElementById('square7');
    var s8 = document.getElementById('square8');
    var s9 = document.getElementById('square9');

    if (s1.innerHTML !== ""){
        v1 = s1.innerHTML;
    }
    if (s2.innerHTML !== ""){
        v2 = s2.innerHTML;
    }
    if (s3.innerHTML !== ""){
        v3 = s3.innerHTML;
    }
    if (s4.innerHTML !== ""){
        v4 = s4.innerHTML;
    }
    if (s5.innerHTML !== ""){
        v5 = s5.innerHTML;
    }
    if (s6.innerHTML !== ""){
        v6 = s6.innerHTML;
    }
    if (s7.innerHTML !== ""){
        v7 = s7.innerHTML;
    }
    if (s8.innerHTML !== ""){
        v8 = s8.innerHTML;
    }
    if (s9.innerHTML !== ""){
        v9 = s9.innerHTML;
    }
    
    if ((v1 === v2 && v2 === v3) 
    || (v4 === v5 && v5 === v6)
    || (v7 === v8 && v8 === v9) 
    || (v1 === v4 && v4 === v7)
    || (v2 === v5 && v5 === v8)
    || (v3 === v6 && v6 === v9)
    || (v1 === v5 && v5 === v9)
    || (v3 === v5 && v5 === v7)){
        gameOver = true;
    }
    else{
        gameOver = false;
    }

    if (!gameOver){
        if (totalMove === 9){
            gameOver = true;
        }
    }
    return gameOver;
}
    
function updateGameStatus(){
    var stausBoard = document.getElementById('status');
    if (gameOver){
        if (totalMove === 9){
            stausBoard.innerHTML = "Its a tie"
        }
        else{
            stausBoard.innerHTML = "game over!"
        }
        
    }
    else{

    }
}
