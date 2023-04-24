const names = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!",];



function golfscore(strokes, par){
    let response;

    if(strokes==1){
        response = names[0];
    }    else if(strokes <= par - 2){
        response = names[1];
    }     else if(strokes ==par - 1){
        response = names[2];
    }    else if(strokes ==par){
        response = names[3];
    }    else if(strokes ==par + 1){
        response = names[4];
    }     else if(strokes ==par + 2){
        response = names[5];
    } else { 
        response = names[6];
    }
    return console.log(response);
};


golfscore(5,4);