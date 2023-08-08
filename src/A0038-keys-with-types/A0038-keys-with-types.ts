type Vehicle = {
  marca: string;
  ano: string; //number
};

type Car = {
  brand: Vehicle['marca'];
  year: Vehicle['ano'];
  name: string;
};

const car1: Car = {
  brand: 'Ford',
  year: '2022',
  name: 'Nome',
};

console.log(car1);
