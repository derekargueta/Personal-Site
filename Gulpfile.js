const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const del = require('del');

gulp.task('clean', function (){
  return del([
      'views/dist'
    ]);
});

gulp.task('minify-html', function() {
  return gulp.src('views/**/*.html')
      .pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
      .pipe(gulp.dest('views/dist'));
});

gulp.task('minify',  ['clean'], function() {
  gulp.run('minify-html');
});

