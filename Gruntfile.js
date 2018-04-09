
  module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          dist: {
            options: {
              style: 'expanded'
            },
            files: {
              'src/pgn-app/comp/css/header.css': 'src/pgn-app/comp/scss/header.scss',
              'src/pgn-app/comp/css/app.css': 'src/pgn-app/comp/scss/app.scss',
              'src/pgn-app/comp/css/productOverview.css': 'src/pgn-app/comp/scss/productOverview.scss',
              'src/pgn-app/comp/css/plan.css': 'src/pgn-app/comp/scss/plan.scss',
              'src/pgn-app/comp/css/keyFeatures.css': 'src/pgn-app/comp/scss/keyFeatures.scss'
            }
          }
        },
        exec: {
          cmd : 'polyserve'
        },
        watch: {
          scripts: {
            files: ['src/pgn-app/comp/scss/*.scss'],
            tasks: ['sass'],
            options: {
              spawn: false,
            },
          },
        }
      });
      
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-exec');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.registerTask('default', ['watch']);
  };