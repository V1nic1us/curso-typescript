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
  getFullName(): string {
    return 'Student: ' + this.name + ' ' + this.lastName;
  }
}
export class Client extends Person {
  getFullName(): string {
    return 'Client: ' + this.name + ' ' + this.lastName;
  }
}

const student = new Student('Marcus', 'Vinícius', 30, '000.000.000-00');
const person = new Person('Marcus', 'Vinícius', 30, '000.000.000-00');
const client = new Client('Marcus', 'Vinícius', 30, '000.000.000-00');

console.log(student.getFullName());
console.log(person.getFullName());
console.log(client.getFullName());
