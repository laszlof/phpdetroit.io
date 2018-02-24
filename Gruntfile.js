module.exports = (grunt) => {
  let jsAssets = {
    'public/assets/vendor.js': [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/popper.js/dist/umd/popper.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'node_modules/countdown/countdown.js',
      'node_modules/riot/riot.js',
      'node_modules/moment/moment.js',
      'node_modules/smooth-scroll/dist/js/smooth-scroll.js',
    ],
    'public/assets/app.js': [
      'src/js/app.js',
      'src/js/speakers.js',
      'src/js/schedule.js',
      'src/js/mixins/time.js',
    ],
  }

  let cssAssets = {
    'public/assets/vendor.css': [
      'node_modules/bootstrap/dist/css/bootstrap.css',
      'node_modules/ionicons/ionicons-compiled.css',
      'node_modules/roboto-fontface/roboto-compiled.css',
    ],
    'public/assets/app.css': [
      'src/css/main.css',
    ],
  }

  grunt.loadNpmTasks('grunt-riot')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-uglify-es')
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
        files: jsAssets,
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
    },
    less: {
      fonts: {
        options: {
          modifyVars: {
            'roboto-font-path': '\'fonts\'',
            'ionicons-font-path': '\'fonts\'',
          },
        },
        files: {
          'node_modules/roboto-fontface/roboto-compiled.css':
            'node_modules/roboto-fontface/css/roboto/less/roboto-fontface.less',
          'node_modules/ionicons/ionicons-compiled.css': 'node_modules/ionicons/less/ionicons.less',
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
            cwd: 'node_modules/ionicons/fonts',
            src: ['**'],
            dest: 'public/assets/fonts',
          },
        ],
      },
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
      'copy:fonts',
      'concat:dist',
      'cssmin:dist',
      'riot:dist',
    ])
  })
  grunt.registerTask('prod', () => {
    grunt.task.run([
      'less:fonts',
      'copy:fonts',
      'uglify:dist',
      'cssmin:dist',
      'riot:dist',
    ])
  })
  grunt.registerTask('dev', () => {
    grunt.task.run('parallel:dev')
  })
}
