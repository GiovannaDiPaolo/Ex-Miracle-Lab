function palabraMasLarga(str) {
    let listaDePalabras = str.split(' ');

    let palabra = listaDePalabras[0];
    for(let i = 0; i < listaDePalabras.length; i++) {

        if (listaDePalabras[i].length > palabra.length ) {
            palabra = listaDePalabras[i];
        }
    }

    return palabra;
}


console.log(palabraMasLarga('Erase una vez que se era'))



//



function primeraMayuscula(str) {
    let listaDePalabras = str.split(' ');
    for(let i = 0; i < listaDePalabras.length; i++) {
        listaDePalabras[i] = listaDePalabras[i].charAt(0).toUpperCase() + listaDePalabras[i].slice(1);
    }
    const str2 = listaDePalabras.join(" ");
return str2;
}


console.log(primeraMayuscula ('Erase una vez que se era'));