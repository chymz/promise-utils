# PromiseUtils
Some useful functions for promises

**Install :**

`npm install @chymz/promise-utils`

## Progress callback
When you call `all()`, `props()`, `series()` or `seriesProps()` returned promise
have an available `progress()` method to listen progress of promises executions

**Usage :**
```javascript
import PromiseUtils from '@chymz/promise-utils';

PromiseUtils.all([
  promise(),
  promise(),
  promise()
])
.progress((current, total) => {
  let percent = current / total * 100;
})
.then(results => {
  // ...
})
```

## `props()`
Instead of using an array with `Promise.all()` you can pass an object to
`PromiseUtils.props()`

**Usage :**
```javascript
import PromiseUtils from '@chymz/promise-utils';

PromiseUtils.props({
  one: promise(),
  two: promise()
})
.then(results => {
  /*
  results object is like :
    {
      one: 'result of first promise',
      two: 'result of second promise'
    }
  */
})
```

## `series()`
@todo : description (see `tests/index.js`)

## `seriesProps()`
@todo : description (see `tests/index.js`)

## Override Promise class used by this lib
If you don't want to use native Promise class, you can do this :

```javascript
import Bluebird from 'bluebird';
import PromiseUtils from 'promise-utils';

PromiseUtils.Promise = Bluebird;

// or simply :

global.Promise = Bluebird;

```

## Todo
- Polyfill note for IE11 & Old browsers
- `series()` & `seriesProps()` description/samples

## License
See `LICENSE` file
