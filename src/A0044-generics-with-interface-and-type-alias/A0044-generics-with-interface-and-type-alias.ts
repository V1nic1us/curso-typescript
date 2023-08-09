interface PersonProtocolo<T, U> {
  name: T;
  lastName: T;
  age: U;
}

type PersonProtocolo2<T = string, U = number> = {
  name: T;
  lastName: T;
  age: U;
};

const student1: PersonProtocolo<string, number> = {
  name: 'Marcus',
  lastName: 'Vinicius',
  age: 30,
};

const student2: PersonProtocolo2<string, number> = {
  name: 'Marcus',
  lastName: 'Vinicius',
  age: 30,
};

const student3: PersonProtocolo2 = {
  name: 'Marcus',
  lastName: 'Vinicius',
  age: 30,
};

console.log(student1);
console.log(student2);
console.log(student3);
