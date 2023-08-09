type documento = {
  name: string;
  date?: Date;
};

const doc: documento = {
  name: 'doc',
};

console.log(doc.date);
console.log(doc.date?.toDateString());
console.log(doc.date?.toDateString() ?? 'Mesagem de erro');
console.log(undefined ?? 'Mesagem de erro');
console.log(null ?? 'Mesagem de erro');
console.log(false ?? 'Mesagem de erro');
console.log(0 ?? 'Mesagem de erro');
console.log('' ?? 'Mesagem de erro');
console.log([] ?? 'Mesagem de erro');
console.log({} ?? 'Mesagem de erro');
