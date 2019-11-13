$("#shoot").click(function() {
    // Create a variable called 'fortune' that generates a random number
let computerchoices = Math.random();

    console.log(computerchoices);
    if (computerchoices = "rock"  && computerchoices == "rock" ); {
        $("#text").html("Nice try but its a tie");
    if (computerchoices = "paper"  && computerchoices == "paper" ); {
     $("#text").html("Nice try but its a tie");
    if (computerchoices = "scissors"  && computerchoices == "scissor" ); {
        $("#text").html("Nice try but its a tie");
    if (computerchoices = "scissors"  && computerchoices == "rock" ); {
     $("#text").html("Oh no u won");
     if (computerchoices = "scissors"  && computerchoices == "paper" ); {
        $("#text").html("yeah I won!");
    if (computerchoices = "rock"  && computerchoices == "scissor" ); {
        $("#text").html("yeah I won");
        

        
    }else if (fortune < 0.66) {
      $("#text").html("wall");
    } else {
      $("#text").html("Go away");
    }

});