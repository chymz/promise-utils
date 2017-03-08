import all from './all';
import props from './props';
import series from './series';
import seriesProps from './seriesProps';

if (!Object.values) {
  Object.values = obj => Object.keys(obj).map(i => obj[i]);
}

export default {
  all,
  props,
  series,
  seriesProps,
  Promise: global.Promise,
};
