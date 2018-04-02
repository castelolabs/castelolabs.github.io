var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass())    
    .pipe(gulp.dest('./css'));
});

// Default
gulp.task('default',function() {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});