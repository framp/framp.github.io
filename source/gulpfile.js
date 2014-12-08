var argv = require('minimist')(process.argv);
var gulp = require('gulp');

var $ = {
  dest: argv['dest'] || '..',
  version: argv['version'] || 0,
  debug: argv['debug'] || false,
  environment: process.env.NODE_ENV || argv['environment'] || 'development',
  root: __dirname
};

['images', 'misc', 'scripts',
  'stylesheets', 'templates'
].forEach(function(script) {
  require('./gulpfile/' + script)(gulp, $);
});

gulp.task('watch', function() {
  gulp.watch('scripts/**/*', ['process-scripts']);
  gulp.watch('stylesheets/**/*', ['process-stylesheets']);
  gulp.watch('images/**/*', ['process-images']);
  gulp.watch('templates/**/*', ['process-templates']);
  gulp.watch('contents/**/*', ['process-templates']);
  gulp.watch('data/**/*', ['process-templates']);
});

gulp.task('clean-all', ['clean-templates', 'clean-stylesheets', 'clean-scripts', 'clean-images']);
gulp.task('process-all', ['process-templates', 'process-stylesheets', 'process-scripts', 'process-images']);
gulp.task('deploy', ['clean-all', 'prepare-deploy'], function() {
  gulp.start('process-all');
});
gulp.task('default', ['process-all', 'connect', 'open', 'watch']);