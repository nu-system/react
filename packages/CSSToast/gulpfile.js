const { src, dest, watch, series } = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

const core = function () {
  return src('./src/**/*.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(
      cleanCSS({
        format: 'keep-breaks',
      }),
    )
    .pipe(dest('./lib/'));
};
const modules = function () {
  return src('./src/**/*.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(rename({ suffix: '.module' }))
    .pipe(
      cleanCSS({
        format: 'keep-breaks',
      }),
    )
    .pipe(dest('./module/'));
};

const watchFile = function () {
  watch('./src/*', core);
};

exports.default = series(core, watchFile);
exports.build = series(core, modules);
