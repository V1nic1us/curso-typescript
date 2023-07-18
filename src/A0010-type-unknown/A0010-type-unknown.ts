// let x: any;
// x = 100;
// x = 'Marcus';
// x = 900;
// x = '10';
// const y = 800;

// console.log(x + y);

let x: unknown;
x = 100;
x = 'Marcus';
x = 900;
x = '10';
const y = 800;

if (typeof x === 'number') console.log(x + y);
