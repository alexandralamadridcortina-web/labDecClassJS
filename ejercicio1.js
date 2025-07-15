class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  obtenerDetalles() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
  }
}

class Coche extends Vehiculo {
  constructor(marca, modelo, año, numeroPuertas) {
    super(marca, modelo, año);
    this.numeroPuertas = numeroPuertas;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()}, Puertas: ${this.numeroPuertas}`;
  }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()}, Cilindrada: ${this.cilindrada}cc`;
  }
}

const miCoche = new Coche("Toyota", "Corolla", 2020, 4);
const miMoto = new Moto("Yamaha", "FZ", 2021, 150);

console.log(miCoche.obtenerDetalles());

console.log(miMoto.obtenerDetalles());

