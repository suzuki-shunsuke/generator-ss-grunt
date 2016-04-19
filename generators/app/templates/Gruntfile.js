module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    bower: {
      install: {
        options: {
          layout: 'byComponent',
          cleanTargetDir: true,
          targetDir: '',
          install: true,
          verbose: false,
          cleanBowerDir: false
        }
      }
    },
    uglify: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: '',
            src: [''],
            dest: '',
            ext: '.min.js'
          }
        ]
      }
    },
    cssmin: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: '',
            src: [''],
            dest: '',
            ext: '.min.css'
          }
        ]
      }
    },
    mocha: {
      test: {
        src: ['']
      }
    },
    simplemocha: {
      options: {
        globals: ['chai'],
        timeout: 3000,
        ui: 'tdd',
        reporter: 'tap'
      },

      all: { src: [''] }
    },
    jsonlint: {
      sample: {
        src: '*.json'
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          minifyJS: true,
          minifyCSS: true
        },
        files: {
          '': ''
        }
      }
    },
    yamllint: {
      all: ['*.yaml', '*.yml']
    },
    jsbeautifier: {
      files: [''],
      options: {
        html: {
          maxPreserveNewlines: 1,
          indentSize: 2,
          extraLiners: []
        }
      }
    },
    sass: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: '',
            src: ['**/*.sass'],
            dest: '',
            ext: '.css'
          }
        ]
      }
    },
    less: {
      development: {
        options: {
          paths: ['assets/css']
        },
        files: {
          'path/to/result.css': 'path/to/source.less'
        }
      },
      production: {
        options: {
          paths: ['assets/css'],
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
            new (require('less-plugin-clean-css'))(cleanCssOptions)
          ],
          modifyVars: {
            imgPath: '"http://mycdn.com/path/to/images"',
            bgColor: 'red'
          }
        },
        files: {
          'path/to/result.css': 'path/to/source.less'
        }
      }
    },
    shell: {
      gjslint: {
        command: 'gjslint --strict --disable 0110 -r .'
      },
      fixjsstyle: {
        command: 'fixjsstyle --strict --disable 0110 -r .'
      }
    },
    pylint: {
      options: {
        // Task-specific options go here.
      },
      hello: {
        // Target-specific file lists and/or options go here.
        src: '*.py'
      }
    },
    jsdoc: {
      dist: {
        src: [''],
        options: {
          destination: ''
        }
      }
    },
    curl: {
      '': ''
    },
    unzip: {
      '': ''
    },
    clean: {
      zip: ['']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-yamllint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-pylint');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('test', ['mocha', 'simplemocha']);
  grunt.registerTask('download', ['curl', 'unzip', 'clean']);
  grunt.registerTask('minify', ['uglify', 'cssmin']);
  grunt.registerTask('init', ['bower:install', 'download']);
  grunt.registerTask('pre-deploy', ['bower:install', 'download', 'minify']);
};
