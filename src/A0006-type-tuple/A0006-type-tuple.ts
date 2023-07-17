const customerData1: [number, string] = [1, 'Marcus'];
// const customerData1: readonly[number, string] = [1, 'Marcus'];
const customerData2: [number, string, string] = [1, 'Marcus', 'Vinicius'];
const customerData3: [number, string, string?] = [1, 'Marcus', 'Vinicius'];
const customerData4: [number, string, ...string[]] = [1, 'Marcus', 'Vinicius'];

customerData1[0] = 100;
customerData1[1] = 'Santos';
customerData1.pop();

console.log(customerData1);
console.log(customerData2);
console.log(customerData3);
console.log(customerData4);

//readonly array
const array1: readonly string[] = ['Luiz', 'Otávio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(array1);
console.log(array2);
