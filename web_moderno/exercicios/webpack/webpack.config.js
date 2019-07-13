const webpack = require('webpack')

module.exports = {
    // mode: 'development',         // para desenvolvimento
    mode: 'production',             // para producao
    entry: './src/principal.js',    // arquivo de entrada
    output: {
        filename: 'principal.js',    // arquivo de saida
        path: __dirname + '/public' // pasta de destino
    },
    module: {
        ruler: [
            {
                test: /\.css$/,
                use: [
                    
                ]
            }
        ]
    }
}