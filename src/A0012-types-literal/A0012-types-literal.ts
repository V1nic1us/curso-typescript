let x = 10; // eslint-disable-line
x = 0b1010; // eslint-disable-line
const y = 10; // eslint-disable-line
const a = 100; // eslint-disable-line

const person = {          // eslint-disable-line
  nome: 'Marcus' as const,
  sobrenome: 'Marques',
};

function chooseTheColor(color: 'Vermelho' | 'Azul' | 'Verde'): string {
  return color;
}

console.log(chooseTheColor('Vermelho'));

//Module Export
export default 1;
