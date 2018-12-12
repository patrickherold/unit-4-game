

// don't run stuff until document ready
$(document).ready(function() {

    // setup each variable and css elements that will be adjusted
    var randomNumber;
    var runningCount = 0;
    var gameStatus = "Keep going";
    $('div.game-status').text(gameStatus);
    // use this array to keep track of all the games. 
    var gameResults = [];

    var images = ['assets/images/crystal1.jpg', 'assets/images/crystal2.jpg', 'assets/images/crystal3.jpg', 'assets/images/crystal4.jpg', 'assets/images/crystal5.jpg', 'assets/images/crystal6.jpg', 'assets/images/crystal7.jpg', 'assets/images/crystal8.jpg', 'assets/images/crystal9.jpg', 'assets/images/crystal10.jpg', 'assets/images/crystal11.jpg'];
    
    // select image urls for each cyrstal
    for (i = 1; i < 5; i++) {
        $(".crystal" + [i]).attr("src", images[Math.floor(Math.random() * images.length)]);
    }

    // setup values to each crystal
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;
    
    // generate a random number between 19 and 120
    randomNumber = Math.floor(Math.random() * 120) + 19;
    $('div.magic-number').text(randomNumber);

    // assing crystal values to crystal divs
    $('img.crystal1').val(crystal1);
    $('img.crystal2').val(crystal2);
    $('img.crystal3').val(crystal3);
    $('img.crystal4').val(crystal4);


    // reset everything for a new game
    function newGame() {
        $('div.game-results').append("Game " + gameStatus.indexOf(gameStatus) + 1 + ": " + gameStatus + ", ");

        // select image urls for each cyrstal
        for (i = 1; i < 5; i++) {
            $(".crystal" + [i]).attr("src", images[Math.floor(Math.random() * images.length)]);
        }

        // assign values to each crystal
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
        
        // assing crystal values to crystal divs
        $('img.crystal1').val(crystal1);
        $('img.crystal2').val(crystal2);
        $('img.crystal3').val(crystal3);
        $('img.crystal4').val(crystal4);

        // display the new random number in the random-number div
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $('div.magic-number').text(randomNumber);

        // setup each variable and css elements that will be adjusted
        runningCount = 0;
        $('div.running-count').text(runningCount);
        gameStatus = "Keep going";
    };
    

    // setup a new game on button click
    $("button.reset").on("click", function() {
        newGame();
    });



    // on cyrstal click add crystal value to runningCount
    $("img.crystal").on("click", function() {

        // get the value of what was clicked only if the game is ongoing
        clicked = $(this).val();
        
        if (gameStatus == "Keep going") {    
            // add it to running count and update display
            runningCount = runningCount + parseInt(clicked);
        };

        // display the running count
        $('div.running-count').text(runningCount);

        // evaluate status of game
        if (runningCount > randomNumber) {
            $('div.alert').toggleClass("alert-danger");
            $('div.game-status').text("You Loose");
            gameStatus = "loss";
            gameResults.push(gameStatus);
        }

        else if (runningCount < randomNumber) {
            $('div.game-status').text("Keep going");
        }
        else {
            $('div.alert').toggleClass("alert-success");
            $('div.game-status').text("You WIN");
            gameStatus = "win";
            gameResults.push(gameStatus);
        };
    });
});



