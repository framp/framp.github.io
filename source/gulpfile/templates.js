var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var async = require('async');
var topl = require('topl');
var Handlebars = require('handlebars');
require('handlebars-layouts')(Handlebars);
require('handlebars-tr')(Handlebars);

var gulpif = require('gulp-if');
var debug = require('gulp-debug');
var data = require('gulp-data');
var handlebars = require('gulp-handlebars-html')();
var rename = require('gulp-rename');
var minifyHTML = require('gulp-minify-html');
var connect = require('gulp-connect');
var vinylPaths = require('vinyl-paths');

var readTOMLSync = function(file) {
  try {
    return topl.parse(fs.readFileSync(file));
  } catch (e) {}
};
var readJSONSync = function(file) {
  try {
    return JSON.parse(fs.readFileSync(file));
  } catch (e) {}
};

module.exports = function(gulp, $) {
  var languages = fs.readdirSync('./contents');
  var defaultLanguage = languages[0];
  languages.forEach(function(language, key) {
    if (language[0] === '_')
      defaultLanguage = language;
  });
  var templateNameRegex = new RegExp(
    '(^' + path.join($.root, 'templates') +
    '|\.[^\.]+$)', 'g');

  gulp.task('process-templates', function(cb) {
    var options = {
      partialsDirectory: [
        './templates/partials', 
        './templates/layouts'
      ]
    };
    var context = {
      __version: $.version,
      __debug: $.environment !== 'production'
    }
    async.map(languages, function(language, done) {
      var languageDest = $.dest;
      if (language !== defaultLanguage)
        languageDest += '/' + language;
      return gulp.src('templates/**/index.hbs')
        .pipe(gulpif($.debug, debug({
          title: 'templates-' + language,
          verbose: true
        })))
        .pipe(data(function(file) {
          var result = {
            __language: {}
          };
          var name = file.path.replace(templateNameRegex, '');
          var dataPath = './data' + path + '.json';
          var partialsPath = './contents/' + language + '/partials.toml';
          var languagePath = './contents/' + language + name + '.toml';
          _.merge(result, readJSONSync(dataPath));
          _.merge(result.__language, readTOMLSync(partialsPath));
          _.merge(result.__language, readTOMLSync(languagePath));
          return result;
        }))
        .pipe(handlebars(context, options))
        .pipe(rename({
          extname: ".html"
        }))
        .pipe(gulpif($.environment==='production', minifyHTML()))
        .pipe(gulp.dest(languageDest))
        .pipe(connect.reload())
        .on('data', function() {})
        .on('end', done);
    }, cb);
  });
  
  gulp.task('clean-templates', function(cb) {
    async.map(languages, function(language, done) {
      var languageDest = $.dest;
      if (language !== defaultLanguage)
        languageDest += '/' + language;
      return gulp.src('templates/**/index.hbs', {
          read: false
        })
        .pipe(gulpif($.debug, debug({
          title: 'templates' + language,
          verbose: true
        })))
        .pipe(rename({
          extname: ".html"
        }))
        .pipe(gulp.dest(languageDest))
        .pipe(vinylPaths(fs.unlink))
        .on('data', function() {})
        .on('end', done);
    }, cb);
  });
};