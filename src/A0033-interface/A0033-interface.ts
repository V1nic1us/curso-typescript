// type TypeName = {
//   name: string;
// };

// type TypeLastName = {
//   lastName: string;
// };

// type TypeFullName = {
//   fullName(): string;
// };

interface TypeName {
  name: string;
}

interface TypeLastName {
  lastName: string;
}

interface TypeFullName {
  fullName(): string;
}

// type TypePerson = TypeName & TypeLastName & TypeFullName;
interface TypePerson2 extends TypeName, TypeLastName, TypeFullName {}

export class Person implements TypePerson2 {
  constructor(
    public name: string,
    public lastName: string,
  ) {}

  fullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const person = new Person('Marcus', 'Vinicius');
console.log(person.fullName());
