export class Car {
  constructor(private engine: Engine = new Engine()) {}

  power() {
    this.engine.power();
  }

  accelerate() {
    this.engine.accelerate();
  }

  stop() {
    this.engine.stop();
  }

  switchOff() {
    this.engine.switchOff();
  }
}

export class Engine {
  power() {
    console.log('Motor está Ligando');
  }

  accelerate() {
    console.log('Motor está acelerando');
  }

  stop() {
    console.log('Motor está parando');
  }

  switchOff() {
    console.log('Motor está desligando');
  }
}

const car1 = new Car();
car1.accelerate();
car1.power();
car1.stop();
car1.switchOff();
