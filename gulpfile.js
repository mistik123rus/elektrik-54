const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const gulpCopy = require('gulp-copy');
const include = require('gulp-include');

/**
 * Сборка цсс (сасс).
 */
function scss() {
    return gulp
        .src('src/style/**/*.scss')
        .pipe(sass())
        .pipe(concat('main.css'))
        //.pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
}

/**
 * Сборка изображений.
 */
function imgs() {
    return gulp
        .src('src/img/**/*')
        .pipe(gulp.dest('dist/img'));
}

/**
 * Сборка изображений.
 */
function html() {
    return gulp
        .src('src/html/**/*')
        .pipe(include())
        .pipe(gulp.dest('dist'));
}

/**
 * Слежение за файлами и автоматическая сборка.
 */
function watcher() {
    gulp.watch('src/html/**/*.html', html);
    gulp.watch('src/img/**/*', imgs);
    gulp.watch('src/style/**/*.scss', scss);
}

const watch = gulp.parallel(watcher);

/**
 * Экспорт модуля сборки.
 */
exports.watch = watch;
exports.default = gulp.parallel(html, scss, imgs);