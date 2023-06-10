const characters = [
    { name: 'Luke Skywalker', 
        height: '172', 
        mass: '77', 
        eye_color: 'blue', 
        gender: 'male' 
    },
    { name: 'Darth Vader', 
        height: '202', 
        mass: '136', 
        eye_color: 'yellow', 
        gender: 'male' 
    },
    { name: 'Leia Organa', 
        height: '150',
        mass: '49', 
        eye_color: 'brown', 
        gender: 'female' 
    },
    { name: 'Anakin Skywalker', 
        height: '188', 
        mass: '84', 
        eye_color: 'blue', 
        gender: 'male' 
    }
  ];

  //¿Todos los personajes tienen ojos azules?
const allCharactersHaveBlueEyes = characters.every(character => character.eye_color === 'blue');
    console.log(allCharactersHaveBlueEyes);

//¿Todos los personajes tienen una masa superior a 40?
const allCharactersHaveMassAbove40 = characters.every(character => parseInt(character.mass) > 40);
    console.log(allCharactersHaveMassAbove40);

//¿Todos los caracteres son más bajos que 200?
const allCharactersAreShorterThan200 = characters.every(character => parseInt(character.height) < 200);
    console.log(allCharactersAreShorterThan200);

//¿Todos los personajes son hombres?
const allCharactersAreMale = characters.every(character => character.gender === 'male');
    console.log(allCharactersAreMale);

