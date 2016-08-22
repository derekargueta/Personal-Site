const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const cleanCSS = require('gulp-clean-css');

gulp.task('clean', () => {
  return del([
    'views/dist',
    'public/stylesheets/dist',
    'dist'
  ]);
});

gulp.task('minify-html', () => {
  return gulp.src('views/**/*.html')
    .pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
    .pipe(gulp.dest('views/dist'));
});

gulp.task('minify-css', () => {
	return gulp.src('public/stylesheets/style.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('dist/public/stylesheets'));
});

gulp.task('copy-images', () => {
	gulp.src('public/images')
		.pipe(gulp.dest('dist/public/images'));
});

gulp.task('build',  ['clean'], () => {
  gulp.run('minify-html');
  gulp.run('minify-css');
  gulp.run('copy-images');
});

