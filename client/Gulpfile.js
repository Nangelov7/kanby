const gulp = require('gulp')
const sass = require('gulp-sass')
const minify = require('gulp-minify-css')
const del = require('del')

gulp.task('styles', () => {
    return gulp.src(['./src/assets/styles/sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(gulp.dest('./src/assets/styles/css/'))
})

gulp.task('clean', () => {
    return del([
        './src/assets/styles/css/*',
    ])
})

gulp.task('default', gulp.series(['clean', 'styles']))