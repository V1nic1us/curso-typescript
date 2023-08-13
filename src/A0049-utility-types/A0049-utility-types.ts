// Record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto1);

type PersonProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PersonRequired = Required<PersonProtocol>;
// Partial
type PersonPartial = Partial<PersonRequired>;
// Readonly
type PersonReadonly = Readonly<PersonRequired>;
// Pick
type PersonPick = Pick<PersonRequired, 'nome' | 'sobrenome'>;

const objeto2: PersonRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

const objeto3: PersonPartial = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
const objeto4: PersonReadonly = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
const objeto5: PersonPick = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  // idade: 30,
};

console.log(objeto2);
console.log(objeto3);
console.log(objeto4);
console.log(objeto5);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

const abc: TipoExclude = 'A';
const c: TipoExtract = 'C';
console.log(abc);
console.log(c);

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asfd9p8a7sdf90a8s76f9as',
  nome: 'Luiz',
  idade: 30,
  sobrenome: 'Miranda',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);
