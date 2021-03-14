const gulp = require('gulp');
const rigger = require('gulp-rigger');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');

const path = require('./gulp_path');

module.exports = function css() {
  return gulp
    .src(`${path.src.css}*.styl`)
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.dst.css));
}