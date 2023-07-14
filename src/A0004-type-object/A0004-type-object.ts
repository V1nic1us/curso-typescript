const objetoA: {
  keyA: string;
  readonly keyB: string; //não é possivel alterar o valor da chave
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

objetoA.keyA = 'other value';
objetoA.keyC = 'New keyD';
objetoA.keyD = 'New keyD';
