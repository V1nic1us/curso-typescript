type GetKeysFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const getKey: GetKeysFn = (object, chave) => object[chave];

const animal = {
  color: 'Rosa',
  vaccines: ['Vacina 1', 'Vacina 2'],
  age: 10,
};

const vaccines = getKey(animal, 'vaccines');
const color = getKey(animal, 'color');
const color1 = getKey([1, 2, 3], 1);

console.log(color1);

console.log(vaccines, color, getKey(animal, 'age'));
