const gulp        = require('gulp');
const browserSync = require('browser-sync').create();



function bs(cb) {
  browserSync.init({
      server: './src'
  });

  gulp.watch('src/*.css').on('change', browserSync.reload);
  gulp.watch('src/*.html').on('change', browserSync.reload);
}

exports.bs = bs;
