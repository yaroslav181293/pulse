const {src,dest}  = require('gulp');

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/path.js");



// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
var webpHTML = require('gulp-webp-html');




const html = () => {
    return src(path.html.src)
     .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
     .pipe(fileinclude())
     .pipe(webpHTML())
     .pipe(size({title:"До сжатия"}))
     .pipe(htmlmin(app.htmlmin))
     .pipe(size({title:"После сжатия"}))
     .pipe(dest(path.html.dest))
     
  }

  module.exports = html;