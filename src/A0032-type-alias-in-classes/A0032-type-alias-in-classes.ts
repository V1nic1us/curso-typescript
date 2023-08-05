// export abstract class TypePerson {
//   protected abstract name: string;
//   protected abstract lastName: string;
//   protected abstract fullName(): string;
// }

// type TypePerson = {
//   name: string;
//   lastName: string;
//   fullName(): string;
// };

type TypeName = {
  name: string;
};

type TypeLastName = {
  lastName: string;
};

type TypeFullName = {
  fullName(): string;
};
// export class Person extends TypePerson {
//   constructor(
//     protected name: string,
//     protected lastName: string,
//   ) {
//     super();
//   }

//   protected fullName(): string {
//     return this.name + ' ' + this.lastName;
//   }
// }

// export class Person implements TypePerson {
//   constructor(
//     public name: string,
//     public lastName: string,
//   ) {}

//   fullName(): string {
//     return this.name + ' ' + this.lastName;
//   }
// }

export class Person implements TypeFullName, TypeName, TypeLastName {
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
