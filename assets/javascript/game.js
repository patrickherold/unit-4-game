


// setup each variable and css elements that will be adjusted
var randomNumber;
var runningCount = 0;
var gameStatus = "ongoing";

// display the new random number in the random-number div
var randomNumber = Math.floor(Math.random() * 120) + 19;

// assign values to each crystal
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

// don't run stuff until document ready
$(document).ready(function() {

    // generate a random number between 19 and 120
    randomNumber = Math.floor(Math.random() * 120) + 19;

    $('div.magic-number').text(randomNumber);

    // assing crystal values to crystal divs
    $('img.crystal1').val(crystal1);
    $('img.crystal2').val(crystal2);
    $('img.crystal3').val(crystal3);
    $('img.crystal4').val(crystal4);


    // on cyrstal click add crystal value to runningCount
    $("img.crystal").on("click", function() {

        // get the value of what was clicked only if the game is ongoing
        clicked = $(this).val();
        
        if (gameStatus == "ongoing") {    
            // add it to running count and update display
            runningCount = runningCount + parseInt(clicked);
        };

        $('div.running-count').text(runningCount);

        // evaluate status of game
        if (runningCount > randomNumber) {
            $('div.game-results').text("You Loose");
            gameStatus = "loss";
        }
        else if (runningCount < randomNumber) {
            $('div.game-results').text("Keep going");
        }
        else {
            $('div.game-results').text("You WIN");
            gameStatus = "win";
        };
    });

});

// setup a new game

