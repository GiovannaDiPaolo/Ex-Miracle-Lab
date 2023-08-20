class Tamagochi {
    nombre: string;
    energia: number;
    sexo: 'F' | 'M';
    sentidoHumor: number;
    edad: number;
    vecesComida: number;
    vecesBebida: number;
  
    constructor(nombre: string, sexo: 'F' | 'M') {
      this.nombre = nombre;
      this.energia = 100;
      this.sexo = sexo;
      this.sentidoHumor = 3;
      this.edad = 0;
      this.vecesComida = 0;
      this.vecesBebida = 0;
    }
    
    cambiarEnergia (delta: number): void{
      const nuevaEnergia = this.energia + delta
      if (nuevaEnergia > 100){
        this.energia = 100
        return
      }

      if (nuevaEnergia <= 0){
        this.energia = 0
        this.morir()
        return
      }

      this.energia = nuevaEnergia

    }
  
    comer(): void {
      if (this.vecesComida === 5) {
        this.morir();
      } else {
        this.cambiarEnergia(25);
        this.vecesComida++;
        this.vecesBebida = 0;
      }
    }
  
    dormir(): void {
      this.energia = 100;
    }
  
    beber(): void {
      if (this.vecesBebida === 5) {
        this.morir();
      } else {
        this.cambiarEnergia(10);
        this.vecesBebida++;
        this.vecesComida = 0;
      }
    }
  
    saltar(): void {
      this.cambiarEnergia(-25);
    }
  
    correr(): void {
      this.cambiarEnergia(-15);
    }
  
    caminar(): void {
      this.cambiarEnergia(-10);
    }
  
    private morir(): void {
      console.log(`${this.nombre} ha muerto...`);
    }
  }
  
  class TamagochiCollection {
    tamagochis: Tamagochi[];
  
    constructor() {
      this.tamagochis = [];
    }
  
    agregarTamagochi(nombre: string, sexo: 'F' | 'M'): void {
      const tamagochi = new Tamagochi(nombre, sexo);
      this.tamagochis.push(tamagochi);
    }
  
    eliminarTamagochi(nombre: string): void {
      this.tamagochis = this.tamagochis.filter((tamagochi) => tamagochi.nombre !== nombre);
    }
  
    buscarTamagochi(nombre: string): Tamagochi | undefined {
      return this.tamagochis.find((tamagochi) => tamagochi.nombre === nombre);
    }
  }
  
  // Ejemplo 
  const tamagochis = new TamagochiCollection();
  tamagochis.agregarTamagochi('Tama1', 'F');
  tamagochis.agregarTamagochi('Tama2', 'M');
  
  const tama1 = tamagochis.buscarTamagochi('Tama1');
  if (tama1) {
    tama1.comer();
    tama1.dormir();
    tama1.beber();
  }
  
  const tama2 = tamagochis.buscarTamagochi('Tama2');
  if (tama2) {
    tama2.saltar();
    tama2.correr();
    tama2.caminar();
  }
  
  tamagochis.eliminarTamagochi('Tama1');
  