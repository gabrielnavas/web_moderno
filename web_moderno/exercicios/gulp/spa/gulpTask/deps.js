const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.css', 'deps.fonts'])

gulp.task('deps.css', () => {
    return gulp.src([
        'node_modules/font-awesome/css/font-awesome.min.css'
    ])

    .pipe(uglifycss({uglyComments: true})) //tirar comentários
    .pipe(concat('deps.min.css')) //concatenar
    .pipe(gulp.dest('build/assets/css')) //destino do arquivo
})
gulp.task('deps.fonts', () => {
})
