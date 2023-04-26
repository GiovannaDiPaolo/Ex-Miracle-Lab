// Dificultad
let nivel;

function elegirDificultad() {
  nivel = prompt("Elige nivel de dificultad 1-Fácil 2-Medio 3-Difícil");

  if (nivel == "1") {
    numeroAleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  } else if (nivel == "2") {
    numeroAleatorio = Math.floor(Math.random() * (20 - 1 + 1) + 1);
  } else {
    numeroAleatorio = Math.floor(Math.random() * (30 - 1 + 1) + 1);
  }
}

//Juego

function adivinarNumero() {
  let numeroAleatorio = Math.floor(Math.random() * (nivel - 1 + 1) + 1);
  let numeroAdivinado = null;
  while (numeroAleatorio != numeroAdivinado) {
    numeroAdivinado = prompt("Elige un número");
    if (numeroAdivinado < numeroAleatorio) {
      alert("El número es mayor");
    } else if (numeroAdivinado > numeroAleatorio) {
      alert("El número es menor");
    } else {
      alert("¡ADIVINASTE!");
    }
  }
}

elegirDificultad();
adivinarNumero();