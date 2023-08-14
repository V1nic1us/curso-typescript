/* eslint-disable @typescript-eslint/no-explicit-any */
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorador');

  return class extends target {
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.invert(args[0]);
      this.color = this.invert(args[1]);
    }

    invert(value: any) {
      return value.split('').reverse().join('');
    }
  };
}

@decorator
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {
    console.log('Classes instanciada');
  }
}

// export const animal = new Animal('lobo', 'branco');
// console.log(animal);
