'use strict';

const dir = {
  src: './src/',
  build: './build/'
};

const { series, parallel, src, dest, watch } = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const del = require('del');

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const ghpages = require('gh-pages');
const path = require('path');

function styles() {
  return src(`${dir.src}scss/style.scss`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: ['last 2 version']}),
    ]))
    .pipe(sourcemaps.write('/'))
    .pipe(dest(`${dir.build}css/`))
    .pipe(browserSync.stream());
}
exports.styles = styles;

function copyHTML() {
  return src(`${dir.src}*.html`)
    .pipe(plumber())
    .pipe(dest(dir.build));
}
exports.copyHTML = copyHTML;

function copyVendorsJs() {
  return src([
      './node_modules/picturefill/dist/picturefill.min.js',
    ])
    .pipe(plumber())
    .pipe(dest(`${dir.build}js/`));
}
exports.copyVendorsJs = copyVendorsJs;

function copyFonts() {
  return src(`${dir.src}fonts/**/*.{woff2,woff}`)
    .pipe(plumber())
    .pipe(dest(`${dir.build}fonts/`));
}
exports.copyFonts = copyFonts;

function copyIMG() {
  return src(`${dir.src}img/**/*.{jpg,jpeg,svg,gif,webp,png}`)
    .pipe(plumber())
    .pipe(dest(`${dir.build}img/`));
}
exports.copyIMG = copyIMG;

function javascript() {
  return src(`${dir.src}js/script.js`)
    .pipe(plumber())
    .pipe(webpackStream({
      mode: 'development',
      output: {
        filename: 'script.js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      // externals: {
      //   jquery: 'jQuery'
      // }
    }))
  .pipe(dest(`${dir.build}js`))
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(dest(`${dir.build}js`));
}
exports.javascript = javascript;



function clean() {
  return del(dir.build)
}

exports.clean = clean;

function deploy(cb) {
  ghpages.publish(path.join(process.cwd(), dir.build), cb);
}

exports.deploy = deploy;

function serve() {
  browserSync.init({
    server: dir.build,
    startPath: 'index.html',
    open: false,
    port: 8080,
  });
  watch(`${dir.src}scss/**/*.scss`, { delay: 100 }, styles);
  watch(`${dir.src}*.html`).on('change', series (
    copyHTML,
    browserSync.reload
  ));
  watch(`${dir.src}js/**/*.js`).on('change', series (
    javascript,
    browserSync.reload
  ));
}

exports.default = series(
  clean,
  parallel(styles, copyIMG, copyFonts, copyHTML, copyVendorsJs, javascript),
  serve
  );
