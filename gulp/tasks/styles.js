/*jshint esversion: 6 */

const gulp = require('gulp'),
  postcss = require('gulp-postcss'), // main package to add post-processing to css
  autoprefixer = require('autoprefixer'), // adds vendor prefixes when needed
  cssvars = require('postcss-simple-vars'), // processes vars into valid css
  nested = require('postcss-nested'), // processes nested css into valid css
  cssImport = require('postcss-import'), // Allows for importing css as modules
  mixins = require('postcss-mixins'); // mixins are reusable bits of code

  gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css') // Get this file...
      .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])) // ...run it thru these...
      .on('error', function(errorInfo) { // Crashes on fat-arrow function
        console.log(errorInfo.toString());
        this.emit('end'); // End this task gracefully on error
      })
      .pipe(gulp.dest('./app/temp/styles')); // ...then put it here.
  });
