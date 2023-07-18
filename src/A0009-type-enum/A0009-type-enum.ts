// estrutura de dados não ordenada
enum Colors {
  VERMELHO = 10,
  AZUL = 200,
  AMARELO = 300,
}

enum Colors {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Colors);
// console.log(Colors.VERMELHO);
// // console.log(Colors[1]);
// console.log(Colors[10]);
// console.log(Colors.ROXO);

export function selectTheColor(color: Colors): void {
  console.log(Colors[color]);
}

selectTheColor(Colors.ROXO);
