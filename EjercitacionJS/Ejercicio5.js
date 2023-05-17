function camelize(str) {
    let frase = str.split(" ");
       
   for(let i = 0; i < frase.length; i++) {
        frase[i] = frase[i].charAt(0).toUpperCase() + frase[i].slice(1);
}

let camelize = frase.join("");
let camelize2 = camelize.charAt(0).toLowerCase()+ camelize.slice(1)
return camelize2;
}


console.log(camelize("Fueron muy felices por siempre"));