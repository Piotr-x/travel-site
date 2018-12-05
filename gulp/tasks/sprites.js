const gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

const config = {
    shape: {
        spacing: {
            padding: 1
        }
    },
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
};

gulp.task('beginClean', function() {
    return del(['./app/assets/images/sprites/'])
});

gulp.task('createSprite', function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/assets/images/sprites/'));
});

gulp.task('copySpriteCss', function() {
    return gulp.src('./app/assets/images/sprites/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/postcss/modules'))
});

gulp.task('icons', gulp.series('beginClean', 'createSprite', 'copySpriteCss'));