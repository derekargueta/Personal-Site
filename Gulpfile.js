const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
    return gulp.src('views/pages/*.html')
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest('views/dist/pages'));
});

