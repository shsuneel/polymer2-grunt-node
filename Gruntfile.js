
  module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          dist: {
            options: {
              style: 'expanded'
            },
            files: {
              'src/pgn-app/assets/css/header.css': 'src/pgn-app/assets/scss/header.scss',
              'src/pgn-app/assets/css/app.css': 'src/pgn-app/assets/scss/app.scss',
              'src/pgn-app/assets/css/productOverview.css': 'src/pgn-app/assets/scss/productOverview.scss',
              'src/pgn-app/assets/css/plan.css': 'src/pgn-app/assets/scss/plan.scss',
              'src/pgn-app/assets/css/footer.css': 'src/pgn-app/assets/scss/footer.scss',
              'src/pgn-app/assets/css/keyFeatures.css': 'src/pgn-app/assets/scss/keyFeatures.scss',
              'src/pgn-app/assets/css/about-us.css': 'src/pgn-app/assets/scss/about-us.scss'
            }
          }
        },
        exec: {
          cmd : 'polyserve'
        },
        watch: {
          scripts: {
            files: ['src/pgn-app/assets/scss/*.scss'],
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