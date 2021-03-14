const gulp = require('gulp');
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;

const path = require('./gulp/gulp_path');

/** Tasks */
const html = require('./gulp/gulp_html');
const js = require('./gulp/gulp_js');
const css = require('./gulp/gulp_css');
const images = require('./gulp/gulp_images');
const liveReload = function(cb) {
  reload();
  cb();
};

module.exports.default = function() {

  gulp.watch(['build/**/*.*', 'build/*.html'], liveReload);

  html();
  css();
  js();
  images();

  browserSync.init({
    server: {
      baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: 'LiveServer',
  });

  gulp.watch(`${path.src.css}**/*.styl`, css);
  gulp.watch(`${path.src.html}**/*.html`, html);
  gulp.watch(`${path.src.js}**/*.js`, js);
  gulp.watch(`${path.src.img}*.*`, images);

}