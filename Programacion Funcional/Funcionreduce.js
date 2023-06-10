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

// Masa de los personajes
const totalMass = characters.reduce((total, character) =>
 total + parseInt(character.mass), 0);
console.log(totalMass);

//Altura total de todos los personajes:
const totalHeight = characters.reduce((total, character) => total + parseInt(character.height), 0);
console.log(totalHeight);

//Número total de caracteres en todos los nombres de los personajes:
const totalNameCharacters = characters.reduce((total, character) => total + character.name.length, 0);
console.log(totalNameCharacters);

//Número total de caracteres por color de ojos:
const eyeColorCounts = characters.reduce((counts, character) => {
    const eyeColor = character.eye_color;
    counts[eyeColor] = (counts[eyeColor] || 0) + eyeColor.length;
    return counts;
  }, {});
  
  console.log(eyeColorCounts);
  
