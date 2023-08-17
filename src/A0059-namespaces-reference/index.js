/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
var myNamespace2;
(function (myNamespace2) {
  myNamespace2.namespaceName = 'Luiz';
  var PersonNamespace = /** @class */ (function () {
    function PersonNamespace(nome) {
      this.nome = nome;
    }
    return PersonNamespace;
  })();
  myNamespace2.PersonNamespace = PersonNamespace;
  myNamespace2.personNamespace = new PersonNamespace('Luiz');
  var OtherNamespace;
  (function (OtherNamespace) {
    OtherNamespace.namespaceName = 'Nome no outro namespace';
  })((OtherNamespace = myNamespace2.OtherNamespace || (myNamespace2.OtherNamespace = {})));
})(myNamespace2 || (myNamespace2 = {}));
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path= "modules/module.ts"/>
console.log(myNamespace2.namespaceName);
