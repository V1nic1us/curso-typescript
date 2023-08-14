/* eslint-disable @typescript-eslint/no-explicit-any */
@decorator
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
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

export const animal = new Animal('lobo', 'branco');
console.log(animal);
