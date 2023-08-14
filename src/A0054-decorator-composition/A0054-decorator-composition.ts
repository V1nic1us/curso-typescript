/* eslint-disable @typescript-eslint/no-explicit-any */
interface Constructor {
  new (...args: any[]): any;
}

function decorator(params1: string, params2: string) {
  return function <T extends Constructor>(target: T): T {
    console.log('Sou o decorador');

    return class extends target {
      name: string;
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.invert(args[0]);
        this.color = this.invert(args[1]);
      }

      invert(value: string): string {
        return value.split('').reverse().join('') + ' ' + params1 + ' ' + params2;
      }
    };
  };
}

function decorator2(params: string) {
  return function (target: Constructor) {
    console.log('Sou o decorador 2' + ' ' + params);
    return target;
  };
}

@decorator2('valor 1') //segundo a ser executado
@decorator('valor 1', 'valor 2') //primeiro a ser executado
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {
    console.log('Classes instanciada');
  }
}

export const animal = new Animal('lobo', 'branco');
console.log(animal);
