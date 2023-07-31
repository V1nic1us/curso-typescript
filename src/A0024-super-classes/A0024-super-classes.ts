export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

export class Student extends Person {
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public sala: string,
  ) {
    super(name, lastName, age, cpf);
  }

  getFullName(): string {
    console.log('Fazendo coisas antes');
    const result = super.getFullName;
    return result + 'Heyyy!!!';
  }
}

export class Client extends Person {
  getFullName(): string {
    return 'Client: ' + this.name + ' ' + this.lastName;
  }
}

const student = new Student('Marcus', 'Vinícius', 30, '000.000.000-00', '000');
const person = new Person('Marcus', 'Vinícius', 30, '000.000.000-00');
const client = new Client('Marcus', 'Vinícius', 30, '000.000.000-00');

console.log(student.getFullName());
console.log(person.getFullName());
console.log(client.getFullName());
