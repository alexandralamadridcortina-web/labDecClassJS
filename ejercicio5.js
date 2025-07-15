class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    return "Este animal hace un sonido.";
  }
}

class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {
    return "¡Guau guau!";
  }
}

class Gato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }

  emitirSonido() {
    return "¡Miau!";
  }
}

class Pato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    emitirSonido(){
        return "¡Cuac cuac!";
    }
}

const miPerro = new Perro("Toby", 3);
const miGato = new Gato("Michi", 2);
const miPato = new Pato("Donald", 1);

console.log(`${miPerro.nombre} dice: ${miPerro.emitirSonido()}`);
console.log(`${miGato.nombre} dice: ${miGato.emitirSonido()}`);
console.log(`${miPato.nombre} dice: ${miPato.emitirSonido()}`);