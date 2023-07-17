// Array<T> - T[]
export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

export function concatenatesArgs(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplyArgs(1, 2, 3);
const concatenates = concatenatesArgs('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenates);
console.log(upper);
