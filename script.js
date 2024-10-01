const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

function displayMessage() {
    alert("Hello from external JavaScript!");
}

function diceRoller(min, max, ac) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(`${randomNumber}`);
    if (randomNumber >= ac) {
        alert("Hit!");
    } else {
        alert("Miss!");
    }

    document.getElementById("rollButton").disabled = true;

    setTimeout(function () {
        enemyTurn(1, 20, 12);
    }, 2000)
}

function enemyTurn(min, max, ac2) {
    let randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(`Enemy got: ${randomNumber2}`);
    if (randomNumber2 >= ac2) {
        alert("Hit!");
    } else {
        alert("Miss!")
    }

    document.getElementById("rollButton").disabled = false;
}