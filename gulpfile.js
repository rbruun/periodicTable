'use strict';

var gulp = require('gulp');
var validate_css = require('gulp-w3c-css');
var htmlhint = require("gulp-htmlhint");

var gulp = require('gulp');

gulp.task('w3c-css', function() {
    return gulp.src('./assets/stylesheets/*.css')
    .pipe(validate_css())
    .pipe(gulp.dest('./build/css/build'));
})
 
gulp.task('html_hint', function() {
    return gulp.src("*.html")
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
});

gulp.task('default', ['w3c-css', 'html_hint' ]);