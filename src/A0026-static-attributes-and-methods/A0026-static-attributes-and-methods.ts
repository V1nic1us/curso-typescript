export class Person {
  static cpfStandard = '000.000.000-01';
  static ageStandard = 30;

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  normalMethod(): void {
    console.log(Person.ageStandard, Person.cpfStandard);
  }

  static createPerson(name: string, lastName: string) {
    return new Person(name, lastName, Person.ageStandard, Person.cpfStandard);
  }

  // static writeHello(): void {
  //   console.log('OI');
  // }
}

const person = new Person('Marcus', 'Vinícius', 30, '000.000.000-00');
const person2 = Person.createPerson('Marcus', 'Vinicius');
console.log(person);
console.log(person2);
person.normalMethod();
