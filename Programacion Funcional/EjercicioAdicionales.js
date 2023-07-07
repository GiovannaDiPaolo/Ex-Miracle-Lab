function zero(operation = null) {
    if (operation) {
      return operation(0);
    }
    return 0;
  }
  
  function one(operation = null) {
    if (operation) {
      return operation(1);
    }
    return 1;
  }
  
  function two(operation = null) {
    if (operation) {
      return operation(2);
    }
    return 2;
  }
  
  function three(operation = null) {
    if (operation) {
      return operation(3);
    }
    return 3;
  }
  
  // Funciones para las operaciones matemáticas
  
  function plus(num) {
    return function (value) {
      return value + num;
    };
  }
  
  function minus(num) {
    return function (value) {
      return value - num;
    };
  }
  
  function times(num) {
    return function (value) {
      return value * num;
    };
  }
  
  function dividedBy(num) {
    return function (value) {
      return Math.floor(value / num);
    };
  }
  
  // Ejemplos de uso
  
  console.log(three(plus(five()))); // Devuelve 8
  console.log(four(minus(nine()))); // Devuelve -5
  console.log(eight(times(three()))); // Devuelve 24
  console.log(six(dividedBy(two()))); // Devuelve 3
  