var fs = require('fs');
var plugins = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');
var del = require('del');
var gutil = require('gulp-util');
var validate = require('html-angular-validate');
var gulp = require('gulp-help')(require('gulp'));
var sass = require('gulp-sass');
var gcmq = require('gulp-group-css-media-queries');
var g = require('gulp-load-plugins')();

var runSequence = require('run-sequence');
var bs = require('browser-sync');

module.exports = function(gulp, projectConfigurations, gulpConfig, config) {

    var paths = gulpConfig;
    var srcPaths = config.paths;

    gulp.task('sass', function () {
        return gulp.src('./src/scss/**/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gcmq())
            .pipe(gulp.dest('./src/css'))
            .pipe(bs.stream());
    });
    
    gulp.task('server', function() {
        bs.init({
            server: './',
            startPath: './src',
            directory: false,
            ui: false,
            reloadOnRestart: false
        });
    });

    gulp.task('clean', 'Deletes the build', function (cb) {
        return del([paths.dist], cb);
    });

    gulp.task('build-css', false, function () {
        return gulp.src(paths.css_src_all)
        // Dump all files into build folder
            .pipe(gulp.dest(paths.dist));
    });

    gulp.task('watch', function () {
        gulp.watch('**/*.scss', ['clean','sass','build-css']);
    });

    gulp.task('serve', 'Builds the code, the server will be started locally and a watch set up to allow live reload', ['sass', 'server', 'watch']);
    

};