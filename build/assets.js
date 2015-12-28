var gulp = require('gulp'),
    vinylPaths = require('vinyl-paths'),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    paths = require('./paths'),
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    assign = Object.assign || require('object.assign');

gulp.task('clean', function() {
  return gulp.src('/dist/*')
    .pipe(vinylPaths(del))
})

gulp.task('images', function() {
	return gulp.src(paths.imagesRaw)
		.pipe(changed(paths.imagesFinal))
		.pipe(imagemin())
		.pipe(gulp.dest(paths.imagesFinal))
		.pipe(notify({ message: 'Images task complete' }))
})

gulp.task('styles', function() {
  gulp.src('./src/stylesheets/*.scss')
  .pipe(sass({
    includePaths: require('node-neat').includePaths,
    errLogToConsole: true
  }))
  .pipe(gulp.dest('./dist/css/'))
})

gulp.task('templates', function() {
  return gulp.src(paths.jade)
    .pipe(jade())
    .pipe(gulp.dest(paths.html))
})

gulp.task('es2js', function () {
  return gulp.src(paths.es2015)
    .pipe(plumber())
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: paths.sourceMapRelativePath }))
    .pipe(gulp.dest(paths.js));
})
