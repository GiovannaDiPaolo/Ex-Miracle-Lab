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

//¿Hay al menos un personaje masculino?
const atLeastOneMaleCharacter = characters.some(character => character.gender === 'male');
    console.log(atLeastOneMaleCharacter);

//¿Hay al menos un personaje con ojos azules?
const atLeastOneCharacterWithBlueEyes = characters.some(character => character.eye_color === 'blue');
    console.log(atLeastOneCharacterWithBlueEyes);

//¿Hay al menos un personaje más alto que 200?
const atLeastOneCharacterTallerThan200 = characters.some(character => parseInt(character.height) > 200);
    console.log(atLeastOneCharacterTallerThan200);

//¿Hay al menos un personaje que tenga una masa inferior a 50?
const atLeastOneCharacterWithMassBelow50 = characters.some(character => parseInt(character.mass) < 50);
    console.log(atLeastOneCharacterWithMassBelow50);



