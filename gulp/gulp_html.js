const gulp = require('gulp');
const rigger = require('gulp-rigger');

module.exports = function html() {
  return gulp
    .src('src/html/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('build/'));
}
