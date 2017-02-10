const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');

rollup.rollup({
    entry: 'src/index.js',
    plugins: [
      babel({
        runtimeHelpers: true,
        presets: [
          ['env', { modules: false }],
        ],
        plugins: [
          'external-helpers',
          ['transform-es2015-classes', { loose:true } ],
        ],
      }),
      uglify(),
    ],
  })
  .then(function (bundle) {
    bundle.write({
      format: "umd",
      moduleName: "PromiseUtils",
      dest: "./dist/promise-utils.js",
      sourceMap: true
    });
  })
