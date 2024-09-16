const { use } = require('express/lib/application');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = [
    { filename: 'index.html', template: './index.html' },
    { filename: 'about.html', template: './about.html' },
    { filename: 'contact.html', template: './contact.html' },
    { filename: 'events.html', template: './events.html' },
    { filename: 'notice.html', template: './notice.html' },
    { filename: 'research.html', template: './research.html' },
    { filename: 'scholarship.html', template: './scholarship.html' },
    
  ];

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
    plugins:[
        ...pages.map(page => 
        new HtmlWebpackPlugin({
          filename: page.filename,
          template: page.template,
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeOptionalTags: true,
          },
        })
      ),
      new CopyWebpackPlugin({
        patterns: [
          { from: './scss', to: 'scss' },
          { from: './images', to: 'images' },
          { from: './plugins', to: 'plugins' },
          { from: './fonts', to: 'fonts' },
        ],
      }),] ,
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