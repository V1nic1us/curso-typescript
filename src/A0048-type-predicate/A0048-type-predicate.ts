function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

function sum<T>(...args: T[]): number {
  const r = args.reduce((sum, value) => {
    if (isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return r;
}

console.log(sum(1, 2), sum(['1', 2]), sum('1', '2'));
