var imageArray = ['assets/images/crystal1.jpg', 'assets/images/crystal2.jpg', 'assets/images/crystal3.jpg', 'assets/images/crystal4.jpg', 'assets/images/crystal5.jpg', 'assets/images/crystal6.jpg', 'assets/images/crystal7.jpg', 'assets/images/crystal8.jpg', 'assets/images/crystal9.jpg', 'assets/images/crystal10.jpg', 'assets/images/crystal11.jpg'];
    
// use this array to keep track of all the games. 
var wins = 0;
var losses = 0;

// setup each variable and css elements that will be adjusted
var randomNumber;
var runningCount = 0;
var gameStatus = "Keep going";
$('div.game-status').text("Game Ready");

    
// don't run stuff until document ready
$(document).ready(function() {

  
    // select image urls for each cyrstal
    // create a copy of the array
    var newArray = []
        for(var i=0; i<imageArray.length; i++){
        newArray.push(imageArray[i])
    }

    // select image urls for each cyrstal
    for (i = 1; i < 5; i++) {
        var index = Math.floor(Math.random() * newArray.length)
        var randomImage = newArray[index];
        $(".crystal" + [i]).attr("src", randomImage);
        newArray.splice(index, 1);
    }
    
    // setup values to each crystal
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;
    
    // generate a random number between 19 and 120
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    $('div.magic-number').text(randomNumber);

    // assing crystal values to crystal divs
    $('img.crystal1').val(crystal1);
    $('img.crystal2').val(crystal2);
    $('img.crystal3').val(crystal3);
    $('img.crystal4').val(crystal4);


    // reset everything for a new game
    function newGame() {

        // stop cyrstals spining if they were
        $('img#spin').attr('id', '');
        $('img#spinOnce').attr('id', '');
  
        // select image urls for each cyrstal
        // create a copy of the array
        var newArray = []
            for(var i=0; i<imageArray.length; i++){
            newArray.push(imageArray[i])
        }

        // select image urls for each cyrstal
        for (i = 1; i < 5; i++) {
            var index = Math.floor(Math.random() * newArray.length)
            var randomImage = newArray[index];
            $(".crystal" + [i]).attr("src", randomImage);
            newArray.splice(index, 1);
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
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $('div.magic-number').text(randomNumber);

        // setup each variable and css elements that will be adjusted
        runningCount = 0;
        $('div.running-count').text(runningCount);
        gameStatus = "Keep going";
        $('div.alert-success').attr('class', "alert-primary");
        $('div.alert-danger').attr('class', "alert-primary");
        $('div.game-status').text("Game Ready");

    };
    

    // setup a new game on button click
    $("button.reset").on("click", function() {
        newGame();
    });


    // on cyrstal click add crystal value to runningCount
    $("img.crystal").on("click", function() {
    
        if (gameStatus == "Keep going") {    
            // get the value of what was clicked only if the game is ongoing
            clicked = $(this).val();

            // spin the crystal first time its clicked on
            $(this).attr('id', 'spinOnce');

            // add it to running count and update display
            runningCount = runningCount + parseInt(clicked);

            // evaluate status of game
            if (runningCount > randomNumber) {
                gameStatus = "loss";
                losses = losses + 1;
                $('div.alert-primary').attr('class', "alert-danger");
                $('div.game-status').text("You Loose");
            }

            else if (runningCount < randomNumber) {
                $('div.alert').attr('class', "alert-primary");
                $('div.game-status').text("Keep going");
                               
            }
            else {
                gameStatus = "win";
                wins = wins + 1;
                $('div.alert-primary').attr('class', "alert-success");
                $('div.game-status').text("You WIN");

                // spin all the cyrstals if you win!
                $('img.crystal').attr('id', 'spin');
            };


        };

        // display count of wins
        $('#wins').html(wins);

        // display count of losses
        $('#losses').html(losses);

        // display the running count
        $('div.running-count').text(runningCount);


    });
});




