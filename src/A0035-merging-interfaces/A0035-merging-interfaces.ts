// type person = {
//   name: string;
// };

interface person {
  name: string;
}

interface person {
  lastname: string;
}

interface person {
  readonly address: readonly string[];
}

interface person {
  age?: number;
}

const p1: person = {
  name: 'Marcus',
  lastname: 'Vinicius',
  address: ['rua'],
};

console.log(p1);
