/**
 * progress() to define the progress callback
 */
export default function(arr) {
  let resolved = 0;
  let stop = false;
  return function(callback) {
    if (typeof callback === 'function') {
      arr.forEach(p => {
        p.then(() => {
          resolved++;
          if (!stop) callback(resolved, arr.length);
        })
        .catch(err => stop = true );
      });
    }
    return this;
  }
}
