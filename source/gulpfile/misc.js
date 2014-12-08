var fs = require('fs');

var connect = require('gulp-connect');
var open = require('gulp-open');

module.exports = function(gulp, $) {
  if (fs.existsSync($.dest + '/build'))
    $.version = parseInt(fs.readFileSync($.dest + '/build'));

  gulp.task('prepare-deploy', function() {
    $.environment = 'production';
    $.version += 1;
    fs.writeFileSync($.dest + '/build', $.version);
  });

  gulp.task('connect', function() {
    connect.server({
      root: $.dest,
      livereload: true
    });
  });

  gulp.task('open', function() {
    gulp.src('gulpfile.js')
      .pipe(open("", {
        url: 'http://localhost:8080'
      }));
  });
};