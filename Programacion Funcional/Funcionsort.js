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

 //Ordenar por nombre
const charactersSortedByName = characters.sort((a, b) => a.name.localeCompare(b.name));
    console.log(charactersSortedByName);

//Ordenar por masa
const charactersSortedByMass = characters.sort((a, b) => parseInt(a.mass) - parseInt(b.mass));
    console.log(charactersSortedByMass);

// Ordenar por altura
const charactersSortedByHeight = characters.sort((a, b) => parseInt(a.height) - parseInt(b.height));
    console.log(charactersSortedByHeight);

//Ordenar por género
const charactersSortedByGender = characters.sort((a, b) => a.gender.localeCompare(b.gender));
    console.log(charactersSortedByGender);




