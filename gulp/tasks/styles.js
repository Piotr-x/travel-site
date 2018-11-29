const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    rename = require('gulp-rename');

gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/postcss/style.pcss')
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
        .on('error', (err) => {
            console.error(err.toString());
        })
        .pipe( rename({extname: '.css'}) )
        .pipe(gulp.dest('./app/assets/styles/css'));
});