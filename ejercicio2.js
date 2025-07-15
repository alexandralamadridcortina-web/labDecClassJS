class Empleado {
  constructor(nombre, edad, salarioBase) {
    this.nombre = nombre;
    this.edad = edad;
    this.salarioBase = salarioBase;
  }

  calcularSalario() {
    return this.salarioBase;
  }
}

class Gerente extends Empleado {
  constructor(nombre, edad, salarioBase, bonificacion) {
    super(nombre, edad, salarioBase);
    this.bonificacion = bonificacion;
  }

  calcularSalario() {
    return this.salarioBase + this.bonificacion;
  }
}

class Desarrollador extends Empleado {
  constructor(nombre, edad, salarioBase, lenguaje) {
    super(nombre, edad, salarioBase);
    this.lenguaje = lenguaje;
  }

}

const empleadoBase = new Empleado("Laura", 28, 3000000);
const gerente = new Gerente("Carlos", 40, 5000000, 1500000);
const desarrollador = new Desarrollador("Ana", 25, 4000000, "JavaScript");

console.log(`${empleadoBase.nombre} gana: $${empleadoBase.calcularSalario()}`);
console.log(`${gerente.nombre} gana: $${gerente.calcularSalario()}`);
console.log(`${desarrollador.nombre} gana: $${desarrollador.calcularSalario()}`);
