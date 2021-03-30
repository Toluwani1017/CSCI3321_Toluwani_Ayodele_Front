var gameOver = false;
var currentPlayer = 'X';
var totalMove = 0;

function placeMarker(spotId){
    if (!gameOver){
    var spot = document.getElementById(spotId);
    var d = document.getElementsByClassName('common');
    if (d.innerHTML === ''){
        d.innerHTML = spot.innerHTML;
        if (currentPlayerWon()){
            updateGameStatus();
        }
        else{
            totalMove++;
            currentPlayer = 'O'
        }
    }
    else
    {}
    }
}

function currentPlayerWon(){
    var s1 = document.getElementById('square1');
    var s2 = document.getElementById('square2');
    var s3 = document.getElementById('square3');
    var s4 = document.getElementById('square4');
    var s5 = document.getElementById('square5');
    var s6 = document.getElementById('square6');
    var s7 = document.getElementById('square7');
    var s8 = document.getElementById('square8');
    var s9 = document.getElementById('square9');
    
    if ((s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML) 
    || (s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML)
    || (s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML) 
    || (s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML)
    || (s2.innerHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML)
    || (s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML)
    || (s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML)
    || (s3.innerHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML)){
        gameOver = true;
    }
    else{
        gameOver = false;
    }

    if (!gameOver){
        if (totalMove = 9){
            gameOver = true;
        }
    }
    return gameOver;
}
    
function updateGameStatus(){
    var stausBoard = document.getElementById('status');
    if (gameOver){
        stausBoard.innerHTML = "game over!"
    }
    else{
        
    }
}
