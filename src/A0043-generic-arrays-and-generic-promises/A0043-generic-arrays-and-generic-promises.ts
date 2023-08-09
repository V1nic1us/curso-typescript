type T = number;

const arrayNumber: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumber);

async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<T | number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((result) => console.log(result + 1));
myPromise().then((result) => console.log(result + 1));
