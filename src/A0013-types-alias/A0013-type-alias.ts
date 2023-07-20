type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type ColorRGB = 'Vermelho' | 'Azul' | 'Verde';
type ColorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type FavoriteColor = ColorRGB | ColorCMYK;

const pessoa: Pessoa = {
  nome: 'Marcus Vinícius',
  idade: 22,
  salario: 10_000,
  // corPreferida: 'Amarelo',
};

export function setCorPreferida(pessoa: Pessoa, cor: FavoriteColor): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Azul'));
