/**
*
*
**/
var gulp   = require('gulp-help')(require('gulp'));
var concat = require('gulp-concat');
var gutil  = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

module.exports = function(callback) {

  console.info('Publicando bibliotecas de terceiros...');

  console.info('- Vendors Javascripts');
  gulp.src([
	'vendor/semantic/dist/semantic.js', 
	'node_modules/jquery/dist/jquery.js',
	'node_modules/angular/angular.js',
	'node_modules/pace/pace.js'
	])
	.pipe(sourcemaps.init())
    .pipe(concat('vendors.min.js'))
    .pipe(uglify())
	.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public_html/assets/js'))
    .on('error', gutil.log);


  gulp.src('vendor/semantic/dist/themes/*.*')
    .pipe(gulp.dest('public_html/assets/css'))
    .on('error', gutil.log);
	
}