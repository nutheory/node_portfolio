var gulp = require('gulp'),
    paths = require('./paths')

function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
}

gulp.task('watch', ['styles', 'templates', 'es2js', 'images'], function() {
  gulp.watch(paths.es2015, ['es2js']).on('change', reportChange)
  gulp.watch(paths.scss ,['styles']).on('change', reportChange)
  gulp.watch(paths.jade, ['templates']).on('change', reportChange)
  gulp.watch(paths.imagesRaw, ['images']).on('change', reportChange)
})
