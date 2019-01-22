
$(document).ready(function () {

    // variables
    var randomNumber;
    var totalScore = 0;
    var winCount = 0;
    var lossCount = 0;
    // var crystalOne;
    // var crystalTwo;
    // var crystalThree;
    // var crystalFour;

    $(".crystalimg").on("click", function () {

        var value = $(this).attr("data-value");
        totalScore += parseInt(value);
        $("#totalScore").text(totalScore);

        if (totalScore === randomNumber) {
            wins();
            newGame();
        }

        else if (totalScore > randomNumber) {
            losses();
            newGame();
        }

    });

    //crystal images change when hovered on
    $(".crystalimg").hover(function() {
		$(this).css({opacity: .3});
	},
	function() {
		$(this).css({opacity: 1});
	});

//generating random numbers for the "random number" and "crystals"    
// function newNumbers() {
//     //randomNumber is between 19 and 120
//     randomNumber = Math.floor(Math.random() * 102 + 19);
//     console.log(randomNumber);

//     //crystals random numbers are no higher than 12
//     crystalOne = Math.floor(Math.random() * 12 + 1);
//     crystalTwo = Math.floor(Math.random() * 12 + 1);
//     crystalThree = Math.floor(Math.random() * 12 + 1);
//     crystalFour = Math.floor(Math.random() * 12 + 1);
// }

function newGame() {
    $(".crystalimg").each(function () {
        var random = Math.floor(Math.random() * 12 + 1);
        $(this).attr("data-value", random);
    });

    totalScore = 0;
    randomNumber = Math.floor(Math.random() * 102 + 19);

    $("#randomNumber").text(randomNumber);
    $("#totalScore").text(totalScore);
    $("#wins").text(winCount);
    $("#losses").text(lossCount);
    $("#winOrLose").text("");

};

// will show text if game won
function wins() {
    $("#winOrlose").text("You won!!!");
    winCount++;
    $("#wins").text(winCount);
}

// will show text if game lost
function losses() {
    $("#winOrlose").text("You lost!!!");
    lossCount++;
    $("#losses").text(lossCount);
}

newGame();


// play again buttom to function without losing scores
$(".btn").on("click", function () {
    newGame();
});

    // crystal images - function into buttons and will add crystal values together
    // $("#crystal1").on("click", function() {
    //     totalScore = totalScore + crystalOne;
    //     $("#totalScore").text(totalScore);

    //     if (totalScore === randomNumber){
    //         wins()
    //     }

    //     else if (totalScore > randomNumber){
    //         losses()
    //     }

    // });

    // $("#crystal2").on("click", function() {
    //     totalScore = totalScore + crystalTwo;
    //     $("#totalScore").text(totalScore);

    //     if (totalScore === randomNumber){
    //         wins()
    //     }

    //     else if (totalScore > randomNumber){
    //         losses()
    //     }

    // });

    // $("#crystal3").on("click", function() {
    //     totalScore = totalScore + crystalThree;
    //     $("#totalScore").text(totalScore);

    //     if (totalScore === randomNumber){
    //         wins()
    //     }

    //     else if (totalScore > randomNumber){
    //         losses()
    //     }

    // });

    // $("#crystal4").on("click", function() {
    //     totalScore = totalScore + crystalFour;
    //     $("#totalScore").text(totalScore);

    //     if (totalScore === randomNumber){
    //         wins()
    //     }

    //     else if (totalScore > randomNumber){
    //         losses()
    //     }

    // });


});