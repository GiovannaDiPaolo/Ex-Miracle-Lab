function generateSecretNumber(): number[] {
    const secretNumber: number[] = [];
    for (let i = 0; i < 4; i++) {
      const digit = Math.floor(Math.random() * 7); 
      secretNumber.push(digit);
    }
    return secretNumber;
  }

function getUserInput(): number[] {
  let userInput: string | null = prompt("Ingrese un número de 4 dígitos entre 0 y 6");

  while (userInput === null || userInput.length !== 4) {
    userInput = prompt("Error. Debe ingresar un número de 4 dígitos entre el 0 y el 6");
  }
  const userGuess = userInput.split('').map(Number);
  return userGuess;
  
}

function playCodeBreakerGame() {
  const secretNumber = generateSecretNumber();
  let attempts = 0;
  let guessed = false;

  while (!guessed && attempts < 5) {
    const userInput = getUserInput();
    
    if (userInput === secretNumber) {
      alert('¡Adivinaste el número secreto!');
      guessed = true;
    } else{
      alert(numberCompare(secretNumber, userInput));
    }
    attempts++;
  }

  if (!guessed) {
    prompt('Agotaste tus intentos. El número secreto era:', secretNumber.join(''));
  }
}

function numberCompare (secretNumber:number[], userInput:number[]): string{
  const correctDigit: string[] = ["","","",""]; 
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j<4; j++){
      if (secretNumber[i] === userInput[j]){
        correctDigit[i]= i===j ? "X" : "-";
      }
    } 
  }
  let sortedCorrectDigit = correctDigit.sort().reverse();
  return sortedCorrectDigit.join("");
}

playCodeBreakerGame();