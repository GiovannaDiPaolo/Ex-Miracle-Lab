function sumar (){
    let numeros = [].slice.call(arguments);
    let suma = 0;

    for (let i =0; i < arguments.lenght; ++i){
    suma += parseFloat(arguments[i]);
}
 return suma;
}

console.log (sumar (5, 8, 6, 7));