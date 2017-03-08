import PromiseUtils from './index';

/**
 * series() To chain promises
 */
export default function(arr, iterator) {
  let results = new Array(arr.length);
  let current = Promise.resolve();

  for (let i = 0; i < arr.length; ++i) {
    current = results[i] = current.then(function(i) {
      return iterator(arr[i]);
    }.bind(undefined, i));
  }

  return PromiseUtils.all(results);
}
