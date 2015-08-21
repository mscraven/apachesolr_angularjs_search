// Generated on 2015-07-03 using generator-angular-fullstack 2.0.13
'use strict';

module.exports = function (grunt) {
  var localConfig;
  localConfig = {};

  // Load grunt tasks automatically, when needed
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    protractor: 'grunt-protractor-runner',
    injector: 'grunt-asset-injector',
  });

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    pkg: grunt.file.readJSON('package.json'),
    apachesolrAngularjsSearch: {
      // configurable paths
      client: 'src-js',
      dist: 'dist'
    },
    watch: {
      injectJS: {
        files: [
          '<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.js',
          '!<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.spec.js',
          '!<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.mock.js',
          '!<%= apachesolrAngularjsSearch.client %>/app/app.module.js'],
        tasks: ['injector:scripts']
      },
      injectCss: {
        files: [
          '<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.css'
        ],
        tasks: ['injector:css']
      },

       mochaTest: {
         files: [],
         tasks: ['env:test', 'mochaTest']
       },

      jsTest: {
        files: [
          '<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.spec.js',
          '<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.mock.js'
        ],
        tasks: ['newer:jshint:all', 'karma']
      },
      injectSass: {
        files: [
          '<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.{scss,sass}'],
        tasks: ['injector:sass']
      },
      sass: {
        files: [
          '<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.{scss,sass}'],
        tasks: ['sass', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          '{.tmp,<%= apachesolrAngularjsSearch.client %>}/{app,components}/**/*.css',
          '{.tmp,<%= apachesolrAngularjsSearch.client %>}/{app,components}/**/*.html',
          '{.tmp,<%= apachesolrAngularjsSearch.client %>}/{app,components}/**/*.js',
          '!{.tmp,<%= apachesolrAngularjsSearch.client %>}{app,components}/**/*.spec.js',
          '!{.tmp,<%= apachesolrAngularjsSearch.client %>}/{app,components}/**/*.mock.js',
          '<%= apachesolrAngularjsSearch.client %>/assets/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        options: {
          livereload: true
        }
      },
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '<%= apachesolrAngularjsSearch.client %>/.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        '<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.js',
        '!<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.spec.js',
        '!<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.mock.js'
      ],
      test: {
        src: [
          '<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.spec.js',
          '<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.mock.js'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= apachesolrAngularjsSearch.dist %>/*',
            '!<%= apachesolrAngularjsSearch.dist %>/.git*',
            '!<%= apachesolrAngularjsSearch.dist %>/.openshift',
            '!<%= apachesolrAngularjsSearch.dist %>/Procfile'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/',
          src: '{,*/}*.css',
          dest: '.tmp/'
        }]
      }
    },

    // Debugging with node inspector
    'node-inspector': {
      custom: {
        options: {
          'web-host': 'localhost'
        }
      }
    },

    // Automatically inject Bower components into the app
    // @TODO: Take a look to index.html.
    wiredep: {
      target: {
        src: '<%= apachesolrAngularjsSearch.client %>/index.html',
        ignorePath: '<%= apachesolrAngularjsSearch.client %>/',
        exclude: [/bootstrap-sass-official/, /bootstrap.js/, '/json3/', '/es5-shim/', /bootstrap.css/, /font-awesome.css/ ]
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= apachesolrAngularjsSearch.dist %>/public/{,*/}*.js',
            '<%= apachesolrAngularjsSearch.dist %>/public/{,*/}*.css',
            '<%= apachesolrAngularjsSearch.dist %>/public/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= apachesolrAngularjsSearch.dist %>/public/assets/fonts/*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    // @TODO: Take a look to index.html.
    useminPrepare: {
      html: ['<%= apachesolrAngularjsSearch.client %>/index.html'],
      options: {
        dest: '<%= apachesolrAngularjsSearch.dist %>/public'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= apachesolrAngularjsSearch.dist %>/public/{,*/}*.html'],
      css: ['<%= apachesolrAngularjsSearch.dist %>/public/{,*/}*.css'],
      js: ['<%= apachesolrAngularjsSearch.dist %>/public/{,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= apachesolrAngularjsSearch.dist %>/public',
          '<%= apachesolrAngularjsSearch.dist %>/public/assets/images'
        ],
        // This is so we update image references in our ng-templates
        patterns: {
          js: [
            [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
          ]
        }
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= apachesolrAngularjsSearch.client %>/assets/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= apachesolrAngularjsSearch.dist %>/public/assets/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= apachesolrAngularjsSearch.client %>/assets/images',
          src: '{,*/}*.svg',
          dest: '<%= apachesolrAngularjsSearch.dist %>/public/assets/images'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat',
          src: '*/**.js',
          dest: '.tmp/concat'
        }]
      }
    },

    // Package all the html partials into a single javascript payload
    ngtemplates: {
      options: {
        // This should be the name of your apps angular module
        module: 'apachesolrAngularjsSearch',
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        usemin: 'app/app.module.js'
      },
      main: {
        cwd: '<%= apachesolrAngularjsSearch.client %>',
        src: ['{app,components}/**/*.html'],
        dest: '.tmp/templates.js'
      },
      tmp: {
        cwd: '.tmp',
        src: ['{app,components}/**/*.html'],
        dest: '.tmp/tmp-templates.js'
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= apachesolrAngularjsSearch.client %>',
          dest: '<%= apachesolrAngularjsSearch.dist %>/public',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
            'assets/images/{,*/}*.{webp}',
            'assets/fonts/**/*',
            'index.html'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= apachesolrAngularjsSearch.dist %>/public/assets/images',
          src: ['generated/*']
        }, {
          expand: true,
          dest: '<%= apachesolrAngularjsSearch.dist %>',
          src: [
            'package.json',
            'server/**/*'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= apachesolrAngularjsSearch.client %>',
        dest: '.tmp/',
        src: ['{app,components}/**/*.css']
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'sass',
      ],
      test: [
        'sass',
      ],
      debug: {
        tasks: [
        ],
        options: {
          logConcurrentOutput: true
        }
      },
      dist: [
        'sass',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    mochaTest: {
      options: {
        reporter: 'spec'
      },
      src: ['server/**/*.spec.js']
    },

    protractor: {
      options: {
        configFile: 'protractor.conf.js'
      },
      chrome: {
        options: {
          args: {
            browser: 'chrome'
          }
        }
      }
    },

    env: {
      test: {
        NODE_ENV: 'test'
      },
      prod: {
        NODE_ENV: 'production'
      },
      all: localConfig
    },

    // Compiles Sass to CSS
    sass: {
      server: {
        options: {
          loadPath: [
            '<%= apachesolrAngularjsSearch.client %>/bower_components',
            '<%= apachesolrAngularjsSearch.client %>/app',
            '<%= apachesolrAngularjsSearch.client %>/components'
          ],
          compass: false
        },
        files: {
          '.tmp/app/app.css' : '<%= apachesolrAngularjsSearch.client %>/app/app.scss'
        }
      }
    },

    injector: {
      options: {

      },
      // Inject application script files into index.html (doesn't include bower)
      scripts: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/client/', '');
            filePath = filePath.replace('/.tmp/', '');
            return '<script src="' + filePath + '"></script>';
          },
          starttag: '<!-- injector:js -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
          '<%= apachesolrAngularjsSearch.client %>/index.html': [
              ['{.tmp,<%= apachesolrAngularjsSearch.client %>}/{app,components}/**/*.js',
               '!{.tmp,<%= apachesolrAngularjsSearch.client %>}/app/app.module.js',
               '!{.tmp,<%= apachesolrAngularjsSearch.client %>}/{app,components}/**/*.spec.js',
               '!{.tmp,<%= apachesolrAngularjsSearch.client %>}/{app,components}/**/*.mock.js']
            ]
        }
      },

      // Inject component scss into app.scss
      sass: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/client/app/', '');
            filePath = filePath.replace('/client/components/', '');
            return '@import \'' + filePath + '\';';
          },
          starttag: '// injector',
          endtag: '// endinjector'
        },
        files: {
          '<%= apachesolrAngularjsSearch.client %>/app/app.scss': [
            '<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.{scss,sass}',
            '!<%= apachesolrAngularjsSearch.client %>/app/app.{scss,sass}'
          ]
        }
      },

      // Inject component css into index.html
      css: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/client/', '');
            filePath = filePath.replace('/.tmp/', '');
            return '<link rel="stylesheet" href="' + filePath + '">';
          },
          starttag: '<!-- injector:css -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
          '<%= apachesolrAngularjsSearch.client %>/index.html': [
            '<%= apachesolrAngularjsSearch.client %>/{app,components}/**/*.css'
          ]
        }
      }
    },
  });

  // Used for delaying livereload until after server has restarted
  grunt.registerTask('wait', function () {
    grunt.log.ok('Waiting for server reload...');

    var done = this.async();

    setTimeout(function () {
      grunt.log.writeln('Done waiting!');
      done();
    }, 1500);
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'env:all', 'env:prod', 'wait', 'open']);
    }

    if (target === 'debug') {
      return grunt.task.run([
        'clean:server',
        'env:all',
        'injector:sass',
        'concurrent:server',
        'injector',
        'wiredep',
        'autoprefixer',
        'concurrent:debug'
      ]);
    }

    grunt.task.run([
      'clean:server',
      'env:all',
      'injector:sass',
      'concurrent:server',
      'injector',
      'wiredep',
      'autoprefixer',
      'wait',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', function(target) {
    if (target === 'server') {
      return grunt.task.run([
        'env:all',
        'env:test',
        'mochaTest'
      ]);
    }

    else if (target === 'client') {
      return grunt.task.run([
        'clean:server',
        'env:all',
        'injector:sass', 
        'concurrent:test',
        'injector',
        'autoprefixer',
        'karma'
      ]);
    }

    else if (target === 'e2e') {
      return grunt.task.run([
        'clean:server',
        'env:all',
        'env:test',
        'injector:sass',
        'concurrent:test',
        'injector',
        'wiredep',
        'autoprefixer',
        'protractor'
      ]);
    }

    else grunt.task.run([
      'test:server',
      'test:client'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'injector:sass',
    'concurrent:dist',
    'injector',
    'wiredep',
    'useminPrepare',
    'autoprefixer',
    'ngtemplates',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
