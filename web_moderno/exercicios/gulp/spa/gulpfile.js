const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTask/app')
require('./gulpTask/deps')
require('./gulpTask/servidor')

gulp.task('default', () => {
    if(util.env.production) {
        // sequence('deps', 'app') //usando para processar essas task sequencial    
        gulp.start('deps', 'app') //modo default assincrono
    } else {
        // sequence('deps', 'app', 'servidor') //usando para processar essas task sequencial
        gulp.start('deps', 'app', 'servidor') //modo default assincrono
    }
})