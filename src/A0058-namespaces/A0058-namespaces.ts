/* eslint-disable @typescript-eslint/no-namespace */
namespace myNamespace {
  export const namespaceName = 'Luiz';

  export class PersonNamespace {
    constructor(public nome: string) {}
  }

  export const personNamespace = new PersonNamespace('Luiz');

  export namespace OtherNamespace {
    export const namespaceName = 'Nome no outro namespace';
  }
}

console.log(myNamespace.namespaceName);
console.log(myNamespace.OtherNamespace.namespaceName);
console.log(myNamespace.personNamespace.nome);
