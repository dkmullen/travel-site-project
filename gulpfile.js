/*jshint esversion: 6 */

const gulp = require('gulp'),
  watch = require('gulp-watch'), // monitor chages to files and react
  postcss = require('gulp-postcss'), // main package to add post-processing to css
  autoprefixer = require('autoprefixer'), // adds vendor prefixes when needed
  cssvars = require('postcss-simple-vars'), // processes vars into valid css
  nested = require('postcss-nested'), // processes nested css into valid css
  cssImport = require('postcss-import'); // Allows for importing css as modules

// First arg is the name, 2nd is what it does; Default task runs at 'gulp' command
gulp.task('default', () => {
  console.log('Created a gulp task!');
});

gulp.task('html', () => {
  console.log('Imagine doing something useful here with html');
});

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css') // Get this file...
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer])) // ...run it thru these...
    .pipe(gulp.dest('./app/temp/styles')); // ...then put it here.
});

gulp.task('watch', () => {
// On changes to index.html, run the html task, above */
  watch('./app/index.html', () => {
    gulp.start('html');
  });

// On changes to any css file under /styles, run the styles task, above
  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles');
  });
});
