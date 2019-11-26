/*JAVASCRIPT CODE FOR LUCKY SEVENS GAME

Ashley Tulloch*/
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function play() {

    var bet = document.forms["betForm"]["Bet"].value;

    if (bet == "" || isNaN(bet) || bet <= 0) {
        alert("You must place a Real bet.");
        document.forms["betForm"]["Bet"]
            .parentElement.className = "form-group has-error";
        return false;
    }


    var money = bet;
    var dice1 = 0;
    var dice2 = 0;
    var rollResult = 0;
    var maxWon = bet;
    var rollsAtMax = 0;

    var totalTurns = 1;

    while (money > 0) {
        dice1 = rollDice();
        dice2 = rollDice();
        rollResult = dice1 + dice2;

        if (rollResult == 7) {
            money += 4;
        } else {
            money -= 1;
        }

        if (maxWon <= money) {
            maxWon = money;
            rollsAtMax = totalTurns;
        }



        console.log(totalTurns);
        totalTurns++
    }

    function clearErrors() {
        for (var loopCounter = 0; loopCounter < document.forms["betForm"].elements.length; loopCounter++) {
            if (document.forms["betForm"].elements[loopCounter]
                .parentElement.className.indexOf("has-") != -1) {

                document.forms["betForm"].elements[loopCounter]
                    .parentElement.className = "form-group";
            }
        }
    }



    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Play Again?";
    document.getElementById("start").innerText = bet;
    document.getElementById("totalRolls").innerText = totalTurns;
    document.getElementById("maxWon").innerText = maxWon;
    document.getElementById("rollsAtMax").innerText = rollsAtMax;



    return false;

}
