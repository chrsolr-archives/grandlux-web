'use strict';

const config = require('./server/config/config');
const gulp = require('gulp');
const glp = require('gulp-load-plugins')({
    lazy: true
});

gulp.task('bootstrap-compile', () => {
    return gulp.src(`./node_modules/bootstrap/scss/bootstrap.scss`)
        .pipe(glp.sass().on('error', glp.sass.logError))
        .pipe(gulp.dest(config.paths.CSS));
});

gulp.task('sass-compile', () => {
    return gulp.src(`${config.paths.SASS}style.scss`)
        .pipe(glp.sass().on('error', glp.sass.logError))
        .pipe(gulp.dest(config.paths.CSS));
});

gulp.task('default', ['sass-compile']);
