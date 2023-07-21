//condicional recomendado
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

//Non-null assertion (!) não recomendado
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion recomendado
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//recomendado
const body4 = document.querySelector('.input') as HTMLInputElement;
body4.style.background = 'red';

//não recomendado
const body5 = document.querySelector('body') as unknown as number;
console.log(body5);
