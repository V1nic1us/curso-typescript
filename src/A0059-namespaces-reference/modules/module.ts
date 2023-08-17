/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
namespace myNamespace2 {
  export const namespaceName = 'Luiz';

  export class PersonNamespace {
    constructor(public nome: string) {}
  }

  export const personNamespace = new PersonNamespace('Luiz');

  export namespace OtherNamespace {
    export const namespaceName = 'Nome no outro namespace';
  }
}
