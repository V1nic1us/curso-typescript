// type FilterCallback = (value: unknown, index?: number, list?: unknown[]) => boolean;

// export function myFilter(array: unknown[], callbackfn: FilterCallback): unknown[] {
//   const arrayFilter = [];

//   for (let i = 0; i < array.length; i++) {
//     if (callbackfn(array[i])) {
//       arrayFilter.push(array[i]);
//     }
//   }

//   return arrayFilter;
// }

type FilterCallback<U> = (value: U, index?: number, list?: U[]) => boolean;

export function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const arrayFilter = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      arrayFilter.push(array[i]);
    }
  }

  return arrayFilter;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
// const arrayFiltradoFunction = myFilter(array, (value) => {
//   if (typeof value === 'number') return value < 5;
//   return false;
// });
const arrayFiltradoFunction = myFilter(array, (value) => value < 5);

console.log(arrayFiltradoOriginal);
console.log(arrayFiltradoFunction);
