/* eslint-disable @typescript-eslint/no-namespace */
import _ from 'lodash';

_.mul = function (array: number[]) {
  return array.reduce((total, actual) => total * actual, 1);
};

global.MYGLOBAL = 'Marcus Vinicius';

export default _;
