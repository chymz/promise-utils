import all from './all';
import progress from './progress';
import PromiseUtils from './index';

if (!Object.values) {
  Object.values = obj => Object.keys(obj).map(i => obj[i]);
}

/**
 * Promise.props() with progress callback
 */
export default function(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  let promise = new PromiseUtils.Promise((resolve, reject) => {
    all(values)
      .then((results) => {
        let result = {};
        keys.forEach((name, index) => {
          result[name] = results[index];
        });
        resolve(result);
      })
      .catch(err => {
        reject(err);
      })
  });

  promise.progress = progress(values);

  return promise;
}
