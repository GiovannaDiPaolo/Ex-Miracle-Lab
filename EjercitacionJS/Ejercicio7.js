let count = 0;

let tablaDeValores = {
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 0,
    8: 0,
    9: 0,
    10: -1,
    'J': -1,
    'Q': -1,
    'K': -1,
    'A': -1,
}

function cc(card) {
    let valor = tablaDeValores[card];
    count = count + valor;

    if (count > 0){
        return "Bet";
    } 
   else if (count === 0){
        return "count=0";
    }  
     else if (count < 0){
       return "Hold";
}
}
console.log(cc(2));
