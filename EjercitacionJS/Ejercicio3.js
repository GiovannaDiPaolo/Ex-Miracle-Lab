function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let alturaActual= 0;
    let crecimiento = velocidadCrecimiento - velocidadDecrecimiento;
    let diasDeCrecimiento = 0;
    if (velocidadDecrecimiento>velocidadCrecimiento){
        return "La planta no va a crecer";
    }

    while (alturaActual < alturaDeseada){
        alturaActual += crecimiento;
        diasDeCrecimiento++;
    }
    return diasDeCrecimiento;
}

console.log (calcularDiasCrecimiento (5,6,10));