module.exports = (grunt) => {
  let jsAssets = {
    '.tmp/vendor.js': [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/popper.js/dist/umd/popper.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'node_modules/countdown/countdown.js',
      'node_modules/riot/riot.js',
      'node_modules/riot-route/dist/route.js',
      'node_modules/moment/moment.js',
      'node_modules/smooth-scroll/dist/js/smooth-scroll.js',
    ],
    '.tmp/app.js': [
      'src/js/app.js',
      'src/js/mixins/time.js',
      'src/js/sessions.js',
      'src/js/speakers.js',
      'src/js/schedule.js',
      'src/js/sponsors.js',
    ],
  }

  let cssAssets = {
    'public/assets/vendor.css': [
      'node_modules/bootstrap/bootstrap-compiled.css',
      'node_modules/font-awesome/css/font-awesome-compiled.css',
      'node_modules/roboto-fontface/roboto-compiled.css',
    ],
    'public/assets/app.css': [
      'src/css/main.css',
    ],
  }

  grunt.loadNpmTasks('grunt-riot')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-devserver')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-parallel')

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        minimize: true,
        compress: true,
      },
      dist: {
        files: {
          'public/assets/vendor.js': '.tmp/vendor.js',
        },
      },
      prod: {
        files: {
          'public/assets/tags.js': '.tmp/tags.js',
        },
      },
    },
    babel: {
      prod: {
        options: {
          presets: ['minify'],
        },
        files: {
          'public/assets/app.js': '.tmp/app.js',
        },
      },
      dev: {
        files: {
          'public/assets/app.js': '.tmp/app.js',
        },
      },
    },
    concat: {
      options: {
        process: (src, filepath) => `/** BEGIN FILE: ${filepath} **/\n\n${src}\n/** END FILE: ${filepath} **/\n`,
      },
      dist: {
        files: jsAssets,
      },
    },
    cssmin: {
      options: {
        specialComments: 0,
      },
      dist: {
        files: cssAssets,
      },
    },
    riot: {
      options: {
        concat: true,
      },
      dist: {
        src: 'src/tags/*.html',
        dest: 'public/assets/tags.js',
      },
      prod: {
        src: 'src/tags/*.html',
        dest: '.tmp/tags.js',
      },
    },
    less: {
      fonts: {
        options: {
          modifyVars: {
            'roboto-font-path': '\'fonts\'',
            'fa-font-path': '\'fonts\'',
            'icon-font-path': '\'fonts\'',
          },
        },
        files: {
          'node_modules/roboto-fontface/roboto-compiled.css':
            'node_modules/roboto-fontface/css/roboto/less/roboto-fontface.less',
          'node_modules/font-awesome/css/font-awesome-compiled.css':
            'node_modules/font-awesome/less/font-awesome.less',
          'node_modules/bootstrap/bootstrap-compiled.css':
            'node_modules/bootstrap/less/bootstrap.less',
        },
      },
    },
    copy: {
      fonts: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/roboto-fontface/fonts',
            src: ['**'],
            dest: 'public/assets/fonts',
          },
          {
            expand: true,
            cwd: 'node_modules/font-awesome/fonts',
            src: ['**'],
            dest: 'public/assets/fonts',
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap/fonts',
            src: ['**'],
            dest: 'public/assets/fonts',
          },
        ],
      },
    },
    clean: {
      fonts: ['public/assets/fonts/**'],
      after: ['.tmp'],
    },
    devserver: {
      server: {
        options: {
          base: 'public',
        },
      },
    },
    watch: {
      scripts: {
        files: [
          'src/js/*.js',
          'src/js/mixins/*.js',
          'src/css/*.css',
          'src/tags/*.html',
        ],
        tasks: ['dist'],
        options: {
          spawn: false,
        },
      },
    },
    parallel: {
      dev: {
        tasks: [
          { grunt: true, args: ['devserver'] },
          { grunt: true, args: ['watch'] },
        ],
      },
    },
  })

  grunt.registerTask('dist', () => {
    grunt.task.run([
      'less:fonts',
      'clean:fonts',
      'copy:fonts',
      'concat:dist',
      'babel:dev',
      'uglify:dist',
      'cssmin:dist',
      'riot:dist',
      'clean:after',
    ])
  })
  grunt.registerTask('prod', () => {
    grunt.task.run([
      'less:fonts',
      'clean:fonts',
      'copy:fonts',
      'concat:dist',
      'babel:prod',
      'riot:prod',
      'uglify:prod',
      'uglify:dist',
      'cssmin:dist',
      'clean:after',
    ])
  })
  grunt.registerTask('dev', () => {
    grunt.task.run('parallel:dev')
  })
}
