import progress from './progress';
import PromiseUtils from './index';

/**
 * Like Promise.all() but with progress callback
 * See : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */
export default function(arr) {
  let promise = PromiseUtils.Promise.all(arr);
  promise.progress = progress(arr);
  return promise;
}
