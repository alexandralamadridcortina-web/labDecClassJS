class Figura {
  constructor(color) {
    this.color = color;
  }

  area() {
    return 0;
  }
}

class Rectangulo extends Figura {
  constructor(color, base, altura) {
    super(color);
    this.base = base;
    this.altura = altura;
  }

  area() {
    return this.base * this.altura;
  }
}

class Circulo extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  area() {
    return Math.PI * Math.pow(this.radio, 2);
  }
}

const miRectangulo = new Rectangulo("azul", 5, 10);
const miCirculo = new Circulo("rojo", 7);

console.log(`Área del rectángulo (${miRectangulo.color}): ${miRectangulo.area()}`);
console.log(`Área del círculo (${miCirculo.color}): ${miCirculo.area().toFixed(2)}`);
