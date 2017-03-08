import all from './all';
import progress from './progress';
import PromiseUtils from './index';

/**
 * seriesProps() To chain promises, like series() but with object as input
 */
export default function(obj, iterator) {
  const keys = Object.keys(obj);
  const arr = Object.values(obj);

  let promisesResults = new Array(arr.length);
  let current = Promise.resolve();

  for (let i = 0; i < arr.length; ++i) {
    current = promisesResults[i] = current.then(function(i) {
      return iterator(arr[i]);
    }.bind(undefined, i));
  }

  let promise = new PromiseUtils.Promise((resolve, reject) => {
    all(promisesResults)
      .then((results) => {
        let result = {};
        keys.forEach((name, index) => {
          result[name] = results[index];
        });
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });

  promise.progress = progress(promisesResults);

  return promise;
}
