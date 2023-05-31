function generateSecretNumber() {
    var secretNumber = [];
    for (var i = 0; i < 4; i++) {
        var digit = Math.floor(Math.random() * 7);
        secretNumber.push(digit);
    }
    return secretNumber;
}
function getUserInput() {
    var userInput = prompt("Ingrese un número de 4 dígitos entre 0 y 6");
    while (userInput === null || userInput.length !== 4) {
        userInput = prompt("Error. Debe ingresar un número de 4 dígitos entre el 0 y el 6");
    }
    var userGuess = userInput.split('').map(Number);
    return userGuess;
}
function playCodeBreakerGame() {
    var secretNumber = generateSecretNumber();
    var attempts = 0;
    var guessed = false;
    while (!guessed && attempts < 5) {
        var userInput = getUserInput();
        if (userInput === secretNumber) {
            alert('¡Adivinaste el número secreto!');
            guessed = true;
        }
        else {
            alert(numberCompare(secretNumber, userInput));
        }
        attempts++;
    }
    if (!guessed) {
        prompt('Agotaste tus intentos. El número secreto era:', secretNumber.join(''));
    }
}
function numberCompare(secretNumber, userInput) {
    var correctDigit = ["", "", "", ""];
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (secretNumber[i] === userInput[j]) {
                correctDigit[i] = i === j ? "X" : "-";
            }
        }
    }
    var sortedCorrectDigit = correctDigit.sort().reverse();
    return sortedCorrectDigit.join("");
}
playCodeBreakerGame();
