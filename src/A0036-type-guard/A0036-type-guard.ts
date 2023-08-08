type Person = { name: string; type: 'pessoa' };
type Animal = { cor: string; type: 'animal' };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  type = 'pessoa' as const;
  constructor(public name: string) {}
}

function getName(obj: PersonOrAnimal): void {
  // if (obj instanceof Student) console.log(obj.name);
  // if ('name' in obj) console.log(obj.name);
  switch (obj.type) {
    case 'pessoa':
      console.log(obj.name);
      return;
    case 'animal':
      console.log(obj.cor);
      return;
  }
}

const studet = new Student('Marcus');
getName(studet);
