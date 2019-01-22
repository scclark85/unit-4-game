
$(document).ready(function () {

    // variables
    var randomNumber;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var crystalOne;
    var crystalTwo;
    var crystalThree;
    var crystalFour;

    //generating random numbers for the "random number" and "crystals"    
    function newNumbers() {
        //randomNumber is between 19 and 120
        randomNumber = Math.floor(Math.random() * 120) + 19;
        //crystals random numbers are no higher than 12
        crystalOne = Math.floor(Math.random() * 12);
        crystalTwo = Math.floor(Math.random() * 12);
        crystalThree = Math.floor(Math.random() * 12);
        crystalFour = Math.floor(Math.random() * 12);
    }

    function newGame() {
        newNumbers();
        $("#randomNumber").text(randomNumber);
        $("#totalScore").text(totalScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#winOrLose").text("");
        
    };

    // will show text if game won
    function winner() {
        $("#winOrlose").text("You won!!!");
        wins++;
        $("#wins").text(wins);
    }

    // will show text if game lost
    function looser() {
        $("#winOrlose").text("You lost!!!");
        losses++;
        $("#losses").text(losses);
    }

    newGame();


    // play again buttom to function without losing scores
    $(".btn").on("click", function() {
		newGame();
    });

    // crystal images function into buttons and will add crystal values together
    $(".crystalimg").on("click", function() {

    });


});