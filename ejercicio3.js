class Producto {
  constructor(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }

  descripcion() {
    return `Producto: ${this.nombre}, Marca: ${this.marca}, Precio: $${this.precio}`;
  }
}

class Telefono extends Producto {
  constructor(nombre, precio, marca, almacenamiento, ram) {
    super(nombre, precio, marca);
    this.almacenamiento = almacenamiento;
    this.ram = ram;
  }

  descripcion() {
    return `${super.descripcion()}, Almacenamiento: ${this.almacenamiento}GB, RAM: ${this.ram}GB`;
  }
}

class Laptop extends Producto {
  constructor(nombre, precio, marca, procesador, pulgadas) {
    super(nombre, precio, marca);
    this.procesador = procesador;
    this.pulgadas = pulgadas;
  }

  descripcion() {
    return `${super.descripcion()}, Procesador: ${this.procesador}, Pantalla: ${this.pulgadas}"`;
  }
}

const miTelefono = new Telefono("Galaxy S23", 4500000, "Samsung", 256, 8);
const miLaptop = new Laptop("MacBook Air", 6500000, "Apple", "M2", 13.6);

console.log(miTelefono.descripcion());
console.log(miLaptop.descripcion());
