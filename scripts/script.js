
//the number of the current roll of dice
var roll_number1=1
//total score 
var total_score_player=0
var total_score_computer=0
//the score of the current roll of dice
var roll_player;
var roll_computer;

const roll_btn=document.getElementById("butn")
const reset_btn=document.getElementById("butn_reset")
//audios
var winnerSound = new Audio("mp3/winnerSound.mp3");
var rollSound=new Audio("mp3/rollSound.mp3");
var gameSound=new Audio("mp3/gameSound.mp3");

//all the images of dice
let dice = document.querySelectorAll("img");

//show and hide About the game rules
function aboutGame() {
    var x = document.getElementById("aboutGame");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
// Function to roll the dice
function rollTheDice() {
  
     if(roll_number1<4){
         //sound for each round
         rollSound.play();
         //annimation of dice
         dice.forEach(function(die){
            die.classList.add("roll");
          });
         
          setTimeout(function(){
            dice.forEach(function(die){
              die.classList.remove("roll");
          });
          //get the random number
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
           //change the dice images
        document.querySelector("#img1").setAttribute("src",
            "images/dice" + randomNumber1 + ".png");

        document.querySelector("#img2").setAttribute("src",
            "images/dice" + randomNumber2 + ".png");
         //check the rules of the game 
        if ((randomNumber1 === 1) && (randomNumber2!=1)|| (randomNumber1 != 1) && (randomNumber2===1)) {
            roll_player=0;
            document.getElementById("player").querySelector("p").innerHTML="0";
        }

        else if (randomNumber1 === randomNumber2) {
            roll_player=(randomNumber1+randomNumber2)*2;
            document.getElementById("player").querySelector("p").innerHTML= ((parseInt(randomNumber1)+parseInt(randomNumber2))*2);
                           
        }

        else {
            roll_player=randomNumber1+randomNumber2;
            document.getElementById("player").querySelector("p").innerHTML= ((parseInt(randomNumber1)+parseInt(randomNumber2)));
                 
        }
                    //add the score of each roll of dice to the total score 
                    total_score_player=total_score_player+roll_player;
                    //display the total score after each roll of dice 
                    document.getElementById("player").querySelector("h2").innerHTML=("The current total score is "+total_score_player);
                    //call the roll of dice function of the computer
                   computer() ;

                },
                1500
              );
            }
   
}
//computer roll same as the player 
function computer(){
       
    var randomNumber3 = Math.floor(Math.random() * 6) + 1;
    var randomNumber4 = Math.floor(Math.random() * 6) + 1;

    document.querySelector("#img3").setAttribute("src",
        "images/dice" + randomNumber3 + ".png");

    document.querySelector("#img4").setAttribute("src",
        "images/dice" + randomNumber4 + ".png");

 
     
    if ((randomNumber3 === 1) && (randomNumber4!=1)|| (randomNumber3 != 1) && (randomNumber4===1)) {
        roll_computer=0;

        document.getElementById("computer").querySelector("p").innerHTML="0";
     
    }

    else if (randomNumber3 === randomNumber4) {
        roll_computer=(randomNumber3+randomNumber4)*2;
        document.getElementById("computer").querySelector("p").innerHTML= ((parseInt(randomNumber3)+parseInt(randomNumber4))*2);
                       
    }

    else {
        roll_computer=randomNumber3+randomNumber4;
        document.getElementById("computer").querySelector("p").innerHTML= ((parseInt(randomNumber3)+parseInt(randomNumber4)));
                }

                total_score_computer=total_score_computer+roll_computer;
                document.getElementById("computer").querySelector("h2").innerHTML=("The current total score is "+total_score_computer);

                roll_number1=roll_number1+1;
                if(roll_number1>3){
                    // after three roll of dice we display the total score of the player and the computer
                    document.getElementById("player").querySelector("h2").innerHTML=("Your total Score is "+ total_score_player);
                    document.getElementById("computer").querySelector("h2").innerHTML=("Your total Score is "+ total_score_computer);
                    // check who is the winner by comparing their total score
                    winner();
                    //disable the roll button after third one 
                    roll_btn.disabled="true";
                    
              
                }
   
}
//reset the game
reset_btn.addEventListener("click", function(){
    
    reset()
})

function reset(){

document.querySelector("#img1").setAttribute("src",
"images/dice6.png");

document.querySelector("#img2").setAttribute("src",
"images/dice6.png");
document.getElementById("player").querySelector("p").innerHTML="-";

document.getElementById("player").querySelector("h2").innerHTML="";
total_score_player=0;
roll_number1=1;
document.getElementById("player").style.backgroundColor="white";
document.getElementById("computer").style.backgroundColor="white";
document.querySelector("#img3").setAttribute("src",
"images/dice6.png");

document.querySelector("#img4").setAttribute("src",
"images/dice6.png");
document.getElementById("computer").querySelector("p").innerHTML="-";

document.getElementById("computer").querySelector("h2").innerHTML="";
total_score_computer=0;

document.getElementById("bottom").querySelector("h1").innerHTML="The Winner is ____ ?"
roll_btn.disabled=false;


}

   //click on button to play  or pause the music
    function playAudio(){
        if (document.querySelector("#my_audio").paused) {
            document.querySelector("#my_audio").play();
            document.querySelector("#sound").innerHTML="Pause Music"
          
           
        }else{
            document.querySelector("#my_audio").pause();
            gameSound.currentTime = 0
            document.querySelector("#sound").innerHTML="Play Music"
        }
    }
   //get the winner
    function winner(){
        winnerSound.play();

       
    if(total_score_player > total_score_computer){
       
      document.getElementById("player").style.backgroundColor="coral";
      document.getElementById("bottom").querySelector("h1").innerHTML="The winner is the Player";

    } else if(total_score_player<total_score_computer){
        document.getElementById("computer").style.backgroundColor="coral";

        document.getElementById("bottom").querySelector("h1").innerHTML="The winner is the Computer";
        bottom
    }else{
        document.getElementById("bottom").querySelector("h1").innerHTML="Tie! No one wins!!";
    }

    }