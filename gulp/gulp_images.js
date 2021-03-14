const gulp = require('gulp');

const imagemin = require('gulp-imagemin');
const pngquant = require('gulp-pngquant');

const path = require('./gulp_path');

module.exports = function images() {
  return gulp.src(`${path.src.img}*.*`)
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()],
    interlaced: true
  }))
  .pipe(gulp.dest(path.dst.img));
}