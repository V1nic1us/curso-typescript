export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected _cpf: string,
  ) {
    this._cpf = _cpf;
  }

  get cpf(): string {
    return this.cpf;
  }

  set cpf(cpf: string) {
    this.cpf = cpf;
  }
}

const person = new Person('Marcus', 'Vinícius', 30, '000.000.000-00');
console.log(person);
