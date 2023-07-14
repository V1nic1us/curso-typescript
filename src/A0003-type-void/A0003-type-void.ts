function nameFunction(...args: string[]): void {
  console.log(args.join(''));
}

nameFunction('Marcus', 'Vinicius');

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
