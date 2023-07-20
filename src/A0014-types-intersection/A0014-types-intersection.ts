//  & AND - intersection

type HasName = { nome: string };
type HasLastName = { sobrenome: string };
type HasAge = { idade: number };
type Pessoa = HasName & HasLastName & HasAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersections = AB & AC & AD;

const A: Intersections = 'A';
console.log(A);

const pessoa: Pessoa = {
  idade: 23,
  nome: 'Marcus',
  sobrenome: 'Vinicius',
};

console.log(pessoa);

//Module Mode
export { pessoa };
