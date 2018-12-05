const gulp = require('gulp'),
        imagemin = require('gulp-imagemin'),
        del = require('del'),
        usemin = require('gulp-usemin'),
        rev = require('gulp-rev'),
        cssnano = require('gulp-cssnano'),
        uglify = require('gulp-uglify'),
        browserSync = require('browser-sync').create();

gulp.task('prevDist', () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
});

gulp.task('deleteDistFolder', () => {
    return del('./docs');
});

gulp.task('copyGeneralFiles', () => {
    let pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/assets/styles/**'
    ];
    return gulp.src(pathsToCopy)
            .pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', () => {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
            .pipe(imagemin({
                progressive: true,
                interlaced: true,
                multipass: true
            }))
            .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('usemin', () => {
    return gulp.src('./app/index.html')
            .pipe(usemin({
                css: [() => {return rev()}, () => {return cssnano()}],
                js: [() => {return rev()}, () => {return uglify()}]
            }))
            .pipe(gulp.dest('./docs'));
});

gulp.task('build', gulp.series('deleteDistFolder', 'icons', 'styles', 'scripts', 'copyGeneralFiles', 'optimizeImages', 'usemin'));