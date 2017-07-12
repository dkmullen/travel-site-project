/*jshint esversion: 6 */

const gulp = require('gulp'),
  watch = require('gulp-watch'), // monitor chages to files and react
  browserSync = require('browser-sync').create(); // Browser auto refresh, sync across many screens

gulp.task('watch', () => {
  /* Sets up a web server to serve, reload our page, with other nifty features */
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });

// On changes to index.html, redisplay the page w/o a full reload */
  watch('./app/index.html', () => {
    browserSync.reload();
  });

// On changes to any css file under /styles, run the styles task, above
  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  });
});

/* Below, styles is a dependency, meaning cssInject won't run till styles
    runs and updates the css */
gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
