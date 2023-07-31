export function getStatus(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name);
  console.log(age);
}

getStatus.call(new Date(), 'Marcus', 22);
getStatus.apply(new Date(), ['Marcus', 22]);
