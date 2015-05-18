/**
 * @date     2015/5/11
 * @author   Dolphin<dolphin.w.e@gmail.com>
 */

var gulp = require('gulp');

var clean = require('gulp-clean');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var header = require('gulp-header');

var pkg = require('./package.json');
var banner = [
    '/*!',
    ' * <%= pkg.name %>',
    ' * <%= pkg.description %>',
    ' * <%= pkg.url %>',
    ' * @author <%= pkg.author %>',
    ' * @version <%= pkg.version %>',
    ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.',
    ' */\n'
].join('\n')

gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(
            clean({
                force: true
            })
        );
});

gulp.task('uglify', ['clean'], function () {
    return gulp.src('src/*.js')
        .pipe(
            uglify()
        )
        .pipe(
            header(banner, {
                pkg: pkg
            })
        )
        .pipe(
            rename({
                extname: '.min.js'
            })
        )
        .pipe(
            gulp.dest('dist')
        );
});

gulp.task('default', ['clean', 'uglify']);