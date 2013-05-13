module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dustjspkg: grunt.file.readJSON('node_modules/dustjs-linkedin/package.json'),
    clean: ['js/lib/dust-core-*.js', 'js/src/templates.js', 'js/main.js', 'css/main.css'],
    copy: {
      main: {
        files: [
          {src: ['node_modules/dustjs-linkedin/dist/dust-core-<%= dustjspkg.version %>.js'], dest: 'js/lib/dust-core-<%= dustjspkg.version %>.js'}
        ]
      }
    },
    dustjs: {
    	compile: {
    		files: {
    			'js/src/templates.js': ['views/**/*.dust']
    		}
    	}
    },
    dusthtml: {
      index: {
        src: "views/index.dust",
        dest: "index.html",
        options: {
          basePath: "views",
          context: "index.json"
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy hh:mm:ss") %> */\n'
      },
      dist: {
        files: {
          'js/main.js': ['js/lib/**/*.js', 'js/src/**/*.js']
        }
      }
    },
    stylus: {
    	compile: {
    		options: {
	    		paths: ['css'],
	    		use: [ require('nib') ],
	    	},
	    	files: {
	    		'css/stylus.css': ['css/**/*.styl']
	    	}
    	}
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy hh:mm:ss") %> */'
        },
        files: {
          'css/main.css': ['css/lib/**/*.css', 'css/src/**/*.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-dustjs');
  grunt.loadNpmTasks("grunt-dust-html");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin'); 

  grunt.registerTask('default', ['clean', 'copy', 'dustjs', 'dusthtml', 'uglify', 'cssmin']);

};