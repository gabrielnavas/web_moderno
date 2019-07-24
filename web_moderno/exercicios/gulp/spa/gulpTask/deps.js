const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.css', 'deps.fonts'])

gulp.task('deps.css', () => {
    //IMPORTANTE: o modulo sequence em app.js somente irá funcionar caso tiver usando return nessa funcao
    return gulp.src([
        'node_modules/font-awesome/css/font-awesome.min.css'
    ])

        .pipe(uglifycss({ uglyComments: true })) //tirar comentários
        .pipe(concat('deps.min.css')) //concatenar
        .pipe(gulp.dest('build/assets/css')) //destino do arquivo
})


gulp.task('deps.fonts', () => {
    //IMPORTANTE: o modulo sequence em app.js somente irá funcionar caso tiver usando return nessa funcao
    return gulp.src(['node_modules/font-awesome/fonts/*.*'])
        .pipe(gulp.dest('build/assets/fonts'))
})
