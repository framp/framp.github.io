var fs = require('fs');

var gulpif = require('gulp-if');
var debug = require('gulp-debug');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var connect = require('gulp-connect');
var vinylPaths = require('vinyl-paths');

module.exports = function(gulp, $) {
  gulp.task('process-stylesheets', function() {
    if ($.environment === 'development')
      return gulp.src('stylesheets/**/index.scss')
        .pipe(gulpif($.debug, debug({
          title: 'stylesheets',
          verbose: true
        })))
        .pipe(sourcemaps.init())
        .pipe(sass({
          errLogToConsole: true,
          includePaths: [$.root + '/bower_components']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest($.dest + '/stylesheets'))
        .pipe(connect.reload());
    if ($.environment === 'production')
      return gulp.src('stylesheets/**/index.scss')
        .pipe(gulpif($.debug, debug({
          title: 'stylesheets',
          verbose: true
        })))
        .pipe(sass({
          errLogToConsole: true,
          includePaths: [$.root + '/bower_components']
        }))
        .pipe(minifycss({
          cache: true,
          processImport: false
        }))
        .pipe(autoprefixer())
        .pipe(rename({
          extname: ".css",
          suffix: '.v' + $.version + '.min'
        }))
        .pipe(gulp.dest($.dest + '/stylesheets/'));
  });
  
  gulp.task('clean-stylesheets', function() {
    return gulp.src('stylesheets/**/index.scss', {
        read: false
      })
      .pipe(gulpif($.debug, debug({
        title: 'stylesheets',
        verbose: true
      })))
      .pipe(rename({
        extname: ".css"
      }))
      .pipe(gulp.dest($.dest + '/stylesheets'))
      .pipe(vinylPaths(fs.unlink))
      .pipe(rename({
        suffix: '.v' + $.version + '.min',
      }))
      .pipe(vinylPaths(fs.unlink));
  });
};