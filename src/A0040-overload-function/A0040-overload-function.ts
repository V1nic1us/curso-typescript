type Adder = {
  (x: number): number;
  (y: number): number;
  (...args: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0 && y) return args.reduce((s, v) => s + v, 0) + x + y;
  if (y) return x + y;
  return x;
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3, 4, 5));
