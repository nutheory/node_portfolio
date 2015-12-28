var path = require('path'),
    appRoot = './src/',
    outputRoot = './dist/'

module.exports = {
  root:   appRoot,
  output: outputRoot,
  es2015:    appRoot + 'js/*.js',
  js:     outputRoot,
  jade:   appRoot + 'views/*.{jade, html}',
  html:   outputRoot,
  scss:   appRoot + 'stylesheets/*.{scss, sass, css}',
  css:    outputRoot + 'css/',
  imagesRaw:    appRoot + 'images/*.{jpg,png}',
  imagesFinal:    outputRoot + 'images/',
  sourceMapRelativePath: '../' + appRoot
}
