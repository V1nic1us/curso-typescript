function unionObjects<T, U>(obj: T, obj2: U): T {
  // return { ...obj, ...obj2 };
  return Object.assign({}, obj, obj2);
}

const obj = { chave1: 'valor1' };
const obj2 = { chave2: 'valor2' };
const union = unionObjects(obj, obj2);
console.log(union);
