module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dustjspkg: grunt.file.readJSON('node_modules/dustjs-linkedin/package.json'),
    watch: {
      scripts: {
        files: ['js/**/*.js', 'css/**/*.styl', 'css/**/*.css', 'views/**/*.dust', 'data/**/*.json'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    },
    clean: ['js/vendor/dust-core-*.js', 'js/templates.js', 'js/main.js', 'css/main-stylus.css', 'css/main.css'],
    copy: {
      main: {
        files: [
          {
            src: ['node_modules/dustjs-linkedin/dist/dust-core-<%= dustjspkg.version %>.js'], 
            dest: 'js/vendor/dust-core-<%= dustjspkg.version %>.js'
          }
        ]
      }
    },
    dustjs: {
      compile: {
        files: {
          'js/templates.js': ['views/**/*.dust']
        }
      }
    },
    dusthtml: {
      index: {
        src: "views/index.dust",
        dest: "index.html",
        options: {
          basePath: "views",
          context: "data/index.json"
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy hh:mm:ss") %> */\n',
        beautify: true
      },
      dist: {
        files: {
          'js/main.js': ['js/vendor/**/*.js', /*'js/templates.js',*/ 'js/src/**/*.js']
        }
      }
    },
    stylus: {
      compile: {
        options: {
          paths: ['css'],
          use: [ require('nib') ]
        },
        files: {
          'css/main-stylus.css': ['css/main.styl']
        }
      }
    },
    csso: {
      dist: {
        files: {
          'css/main.css': ['css/**/*.css']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-dustjs');
  grunt.loadNpmTasks("grunt-dust-html");
  grunt.loadNpmTasks('grunt-csso');

  grunt.registerTask('test', []);

  grunt.registerTask('default', ['clean', 'copy', 'dustjs', 'dusthtml', 'uglify', 'stylus', 'csso']);

};