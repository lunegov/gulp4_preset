const gulp = require('gulp');

const path = require('./gulp_path');
const rigger = require('gulp-rigger');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

module.exports = function js() {
  return gulp.src(`${path.src.js}*.js`)
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.dst.js));
}