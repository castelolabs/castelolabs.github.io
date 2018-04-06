var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');

gulp.task('styles', function() {
    return gulp.src('./assets/scss/style.scss')
        .pipe(sass())
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'ie 11', 'ios 6', 'android 4'))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['styles'], function () {
    gulp.watch(['./assets/scss/*.scss'], ['styles'])
});
