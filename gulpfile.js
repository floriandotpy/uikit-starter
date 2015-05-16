var gulp        = require('gulp'),
    less        = require('gulp-less'),
    minifycss   = require('gulp-minify-css'),
    watch       = require('gulp-watch'),
    runSequence = require('run-sequence');


gulp.task('less', function () {

    // path to main less file
    gulp.src('assets/site.less')

        // compile less
        .pipe(less())

        // minify css
        .pipe(minifycss())

        // output to folder
        .pipe(gulp.dest('./assets'));

});

gulp.task('default', ['less']);

gulp.task('watch', function() {

    // when any less file is changed: recompile
    gulp.watch('assets/**/*.less', function(files) {
        runSequence('less');
    });

});