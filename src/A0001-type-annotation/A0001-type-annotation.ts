/* eslint-disable */

// Tipos básicos (aqui ocorre inferêcia)
let nome: string = 'Marcus'; //
let idade: number = 10; // 10, 1.57, -5.55, 0xf00d(hexadecimal), 0b1010(binario), 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; //bigint

//Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayString: Array<string> = ['a', 'b', 'c'];
let arrayString2: Array<string> = ['a', 'b', 'c'];

//Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 30,
  nome: 'Luiz',
};

//Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
