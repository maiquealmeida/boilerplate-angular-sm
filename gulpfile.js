/*******************************
            Set-up
*******************************/
var config = require('./gulpconfig');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var
  gulp         = require('gulp-help')(require('gulp')),

  watch        = require('./tasks/watch'),
  
  // Criar os builds
  build        = require('./tasks/build'),
  buildJS      = require('./tasks/build/javascript'),
  buildCSS     = require('./tasks/build/css'),
  buildAssets  = require('./tasks/build/assets'),
  buildVendors	   = require('./tasks/build/vendors'),
  
  // Publicar arquivos no diretorio publico
  publish        = require('./tasks/publish'),
  publishJS      = require('./tasks/publish/javascript'),
  publishCSS     = require('./tasks/publish/css'),
  publishAssets  = require('./tasks/publish/assets'),
  publishVendors	   = require('./tasks/publish/vendors'),
  
  // utility
  clean        = require('./tasks/clean')
;


/*******************************
             Tasks
*******************************/

gulp.task('default', false, [
  'watch'
]);

gulp.task('watch', watch);
gulp.task('clean', clean);
gulp.task('build', build);
gulp.task('build-javascript', buildJS);
gulp.task('build-css', buildCSS);
gulp.task('build-assets', buildAssets);
gulp.task('build-vendors', buildVendors);
gulp.task('publish', publish);
gulp.task('publish:vendors', publishVendors);

