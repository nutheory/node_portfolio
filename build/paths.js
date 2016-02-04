var path = require('path'),
    appRoot = './src/',
    bowerRoot = './bower_components/',
    outputRoot = './dist/'

module.exports = {
  bower_css: bowerRoot + 'css/',
  bower_js: bowerRoot + 'js/',
  font_awesome: bowerRoot + 'dist/fonts/**.*',
  fonts: outputRoot + 'fonts/',
  es2015:    appRoot + 'js/*.{js, min.js}',
  js:     outputRoot + 'js/',
  jade:   appRoot + 'views/*.{jade, html}',
  html:   outputRoot,
  scss:   appRoot + 'stylesheets/*.{scss, sass, css}',
  css:    outputRoot + 'css/',
  imagesRaw:    appRoot + 'images/*.{jpg,png}',
  imagesFinal:    outputRoot + 'images/',
  sourceMapRelativePath: '../' + appRoot
}
