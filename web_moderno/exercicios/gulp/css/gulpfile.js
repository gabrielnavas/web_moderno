const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('default', ['copiarHtml'], () => {
    gulp.src('src/sass/index.scss') //dentro desse index tem todos scss
        .pipe(sass().on('error', sass.logError)) //mostrar log específicos de erros
        .pipe(uglifycss({ 'uglyComments': true })) //comprirmir/compactar código
        .pipe(concat('estilo.min.css')) //concatenar arquivos
        .pipe(gulp.dest('build/css')) //destino build/css 
})

gulp.task('copiarHtml', () => {
    //copiar o html para build tb
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})