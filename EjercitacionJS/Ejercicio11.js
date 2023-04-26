function onlyUniques(...args) {
    let Unicos = [];
  
    for (let i = 0; i < args.length; i++) {
      let noRepetido = true;
      for (let j = 0; j < args.length; j++) {
        if (i !== j && args[i] === args[j]) {
          noRepetido = false;
          break;
        }
      }
      if (noRepetido) {
        Unicos.push(args[i]);
      }
    }
  
    return Unicos;
  }

  console.log(onlyUniques(1, 2, 3, 4, 5, 2, 4, 6, 7, 7));