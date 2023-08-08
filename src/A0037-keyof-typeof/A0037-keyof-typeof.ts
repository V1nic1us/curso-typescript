type ColorObj = typeof colorObj;
type ColorKey = keyof ColorObj;

const colorObj = {
  vermelho: 'red',
  azul: 'blue',
  verde: 'green',
};

function colorPrint(color: ColorKey, colorObj: ColorObj) {
  return colorObj[color];
}

colorPrint('vermelho', colorObj);
colorPrint('azul', colorObj);
colorPrint('verde', colorObj);
