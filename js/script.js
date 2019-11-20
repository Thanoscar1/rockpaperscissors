$("#shoot").click(function() {
let computerchoice = Math.random();
let userchoice = $("#input").val();
let randomNumber = Math.random();

$("#userchoice").html(userchoice);
$("#computerChoice").html(computerChoice);
    // Create a variable called 'fortune' that generates a random number

if(randomNumber > 0 && randomNumber < .4){
    computerChoice = "paper"
}
if(randomNumber > .4 && randomNumber < .7){
    computerChoice = "rock"
}
if(randomNumber > .7 && randomNumber < 1){
    computerChoice = "scissors"
}
    if (computerChoice == "rock"  && userchoice == "rock" ) {
        $("#text").html("Nice try but its a tie");
    } if (computerChoice == "paper"  && userchoice == "paper" ) {
     $("#text").html("Nice try but its a tie");
    } if (computerChoice == "scissors"  && userchoice == "scissor" ) {
        $("#text").html("Nice try but its a tie");
    } if (computerChoice == "scissors"  && userchoice == "rock" ) {
     $("#text").html("Oh no u won");
    } if (computerChoice =="scissors"  && userchoice == "paper" ) {
        $("#text").html("yeah I won!");
    } if (computerChoice == "rock"  && userchoice == "scissor" ) {
        $("#text").html("yeah I won");
    } if (computerChoice == "rock"  && userchoice == "paper" ) {
        $("#text").html("oh no u won");
    } if (computerChoice == "paper"  && userchoice == "rock" ) {
        $("#text").html("yeah I won");
    } if (computerChoice == "paper"  && userchoice == "scissor" ) {
        $("#text").html("oh no u won");
    } else {
        $("#text").html("HAHA! funny,W A L L");
    }
});