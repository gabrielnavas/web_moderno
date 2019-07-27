const gulp = require('gulp')

gulp.task('default', () => {
    // console.log('Ok!')
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    console.log('Copiar!!!')
    gulp.src(['pastaA/**/*.txt', 'pastaA/pastaAA/*.txt']) //aceita array [], mas se for um só aceita tb so a string
        
    //exemplo
        //.pipe(transformacao1()) //pipe = encadear
        //.pipe(transformacao2()) 
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('Antes 1!!!')
})

gulp.task('antes2', () => {
    console.log('Antes2!!!')
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('Fim!!1')
})

gulp.task('fim2', () => {
    console.log('Fim!!2') 
})

