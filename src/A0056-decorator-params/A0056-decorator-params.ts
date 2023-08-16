/* eslint-disable @typescript-eslint/no-explicit-any */
function decorator(classPrototype: any, nameMethod: string | symbol | undefined, index: number): any {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(index);
}

export class OnePerson {
  name: string;
  lastname: string;
  age: number;

  constructor(@decorator name: string, @decorator lastname: string, @decorator age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  method(@decorator msg: string): string {
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
const method = person.method('Hello World!');
console.log(method);
