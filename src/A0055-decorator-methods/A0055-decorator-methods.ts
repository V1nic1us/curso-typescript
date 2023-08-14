/* eslint-disable @typescript-eslint/no-explicit-any */
function decorator(classPrototype: any, nomeMetodo: string, descriptor: PropertyDescriptor): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);

  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

export class OnePerson {
  name: string;
  lastname: string;
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  @decorator
  method(msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  get fullName(): string {
    return `${this.name} ${this.lastname}`;
  }

  set fullName(value: string) {
    const palavras = value.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.name = primeiroNome;
    this.lastname = palavras.join(' ');
  }
}

const person = new OnePerson('Marcus', 'Vinicius', 20);
person.method = () => 'Eae';
const method = person.method('Hello World!');
console.log(method);
