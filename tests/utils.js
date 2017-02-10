function timeout(value, delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve(value);
    }, delay);
  });
}

function timeoutReject(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      reject(new Error('error'));
    }, delay);
  });
}

module.exports = {
  timeout: timeout,
  timeoutReject: timeoutReject,
};
