const gulp = require('gulp')
const concat = require('gulp-concat')
// const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            minified: true, // minifica o código/compactar
            comments: false, //tirar comentarios do codigo
            presets: ["env"] //procura qual versao de linguagem eu preciso
        }))
        // .pipe(uglify()) //compactar o code
        .on('error', function (err) { console.log(err) })  //descobrir erros no processo de execucao
        .pipe(concat('codigo.min.js'))  //concatenar vários arquivos
        .pipe(gulp.dest('build')) //destino final do arquivo
})