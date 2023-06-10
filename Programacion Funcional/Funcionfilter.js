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

  // Personajes con masa superior a 100
const charactersWithMassGreaterThan100 = characters.filter(character => parseInt(character.mass) > 100);
    console.log(charactersWithMassGreaterThan100);

//  Personajes con una altura inferior a 200
const charactersWithHeightLessThan200 = characters.filter(character => parseInt(character.height) < 200);
    console.log(charactersWithHeightLessThan200);

// Personajes masculinos
const maleCharacters = characters.filter(character => character.gender === 'male');
    console.log(maleCharacters);

// Personajes femeninos
const femaleCharacters = characters.filter(character => character.gender === 'female');
    console.log(femaleCharacters);

