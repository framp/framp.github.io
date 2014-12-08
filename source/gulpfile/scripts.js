var fs = require('fs');

var gulpif = require('gulp-if');
var debug = require('gulp-debug');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var cache = require('gulp-cached');
var uglify = require('gulp-uglify');
var remember = require('gulp-remember');
var connect = require('gulp-connect');
var vinylPaths = require('vinyl-paths');

module.exports = function(gulp, $) {
  gulp.task('process-scripts', function() {
    if ($.environment === 'development')
      return gulp.src('scripts/**/index.js', { read: false })
        .pipe(gulpif($.debug, debug({
          title: 'scripts',
          verbose: true
        })))
        .pipe(browserify({
          transform: ['debowerify', 'deamdify'],
          debug: true
        }))
        .pipe(gulp.dest($.dest + '/scripts'))
        .pipe(connect.reload());
    if ($.environment === 'production')
      return gulp.src('scripts/**/index.js', { read: false })
        .pipe(gulpif($.debug, debug({
          title: 'stylesheets',
          verbose: true
        })))
        .pipe(browserify({
          transform: ['debowerify', 'deamdify'],
          debug: true
        }))
        .pipe(cache('scripts-uglify'))
        .pipe(uglify())
        .pipe(remember('scripts-uglify'))
        .pipe(rename({
          suffix: '.v' + $.version + '.min'
        }))
        .pipe(gulp.dest($.dest + '/scripts/'))
        .pipe(connect.reload());
  });
  
  gulp.task('clean-scripts', function() {
    return gulp.src('scripts/**/index.js', {
        read: false
      })
      .pipe(gulpif($.debug, debug({
        title: 'scripts',
        verbose: true
      })))
      .pipe(gulp.dest($.dest + '/scripts'))
      .pipe(vinylPaths(fs.unlink))
      .pipe(rename({
        suffix: '.v' + $.version + '.min'
      }))
      .pipe(vinylPaths(fs.unlink));
  });
};