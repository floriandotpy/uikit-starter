var gulp        = require('gulp'),
    less        = require('gulp-less'),
    watch       = require('gulp-watch');


gulp.task('less', function () {

    // path to main less file
    gulp.src('assets/site.less')

        // compile less
        .pipe(less({ compress: true }))

        // output to folder
        .pipe(gulp.dest('./assets'));

});

gulp.task('default', ['less']);

gulp.task('watch', function() {

    // when any less file is changed: recompile
    gulp.watch('assets/**/*.less', ['less']);

});