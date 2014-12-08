var fs = require('fs');
var pngcrush = require('imagemin-pngcrush');

var gulpif = require('gulp-if');
var debug = require('gulp-debug');
var cache = require('gulp-cached');
var imagemin = require('gulp-imagemin');
var remember = require('gulp-remember');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var vinylPaths = require('vinyl-paths');

module.exports = function(gulp, $) {
  gulp.task('process-images', function() {
    if ($.environment === 'development') //TODO: just link the directory?
      return gulp.src('images/**/*')
      .pipe(gulpif($.debug, debug({
        title: 'images',
        verbose: true
      })))
      .pipe(gulp.dest($.dest + '/images/'))
      .pipe(connect.reload());
    if ($.environment === 'production')
      return gulp.src('images/**/*')
        .pipe(gulpif($.debug, debug({
          title: 'stylesheets',
          verbose: true
        })))
        .pipe(cache('images'))
        .pipe(imagemin({
          progressive: true,
          svgoPlugins: [{
            removeViewBox: false
          }],
          use: [pngcrush()]
        }))
        .pipe(remember('images'))
        .pipe(rename({
          suffix: '.v' + $.version + '.min'
        }))
        .pipe(gulp.dest($.dest + '/images/'))
        .pipe(connect.reload());
  });

  gulp.task('clean-images', function() {
    return gulp.src('images/**/*', {
        read: false
      })
      .pipe(gulpif($.debug, debug({
        title: 'images',
        verbose: true
      })))
      .pipe(rename({
        suffix: '.v' + $.version + '.min'
      }))
      .pipe(gulp.dest($.dest + '/images/'))
      .pipe(vinylPaths(fs.unlink));
  });
};