const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

function html() {
    browserSync.reload();
}

gulp.task('watch', () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    watch('./app/assets/styles/postcss/**/*.css', gulp.series('styles'));
    watch(['./app/index.html', './app/assets/styles/css/style.css'], html);
});