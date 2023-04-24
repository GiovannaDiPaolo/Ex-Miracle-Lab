function addOnlyNums(...argumentos) {
    let suma = 0;

    for (let i = 0; i < argumentos.length; i++) {
        if(typeof argumentos[i] === "number" && isFinite(arguments[i])){ 
        suma += argumentos[i];
    }
    console.log(suma);
  }
}


addOnlyNums(2, "a", 3, "3", 4, 5, 6, 7);