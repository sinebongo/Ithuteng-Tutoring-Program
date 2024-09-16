const { use } = require('express/lib/application');
const path = require('path');

module.exports ={
    mode: 'production',
    entry:{
        bundle: path.resolve(__dirname, 'js/script.js'),
    },
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    optimization: {
        minimize: true, 
      },
    module: {
        rules: [
            {
                test: '/\.scss$/',
                use: ['style-loader', 'css-loader', 'sass-loaders']
            }
        ]
    }
}