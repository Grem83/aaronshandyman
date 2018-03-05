// Include gulp.
var gulp = require('gulp');
var config = require('./config.json');

// Include plugins.
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var glob = require('gulp-sass-glob');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

// CSS.
gulp.task('css', function() {
  return gulp.src(config.css.src)
  .pipe(glob())
  .pipe(sourcemaps.init())
  .pipe(sass({
    style: 'compressed',
    errLogToConsole: true,
    includePaths: config.css.includePaths
  }))
  .pipe(autoprefix('last 2 versions', '> 1%', 'ie 9', 'ie 10'))
  .pipe(cleanCSS())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(config.css.dest));
});

// Concat js
gulp.task('js', function() {
  return gulp.src(config.js.src)
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(concat(config.js.file))
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(config.js.dest));
});

// Watch task.
gulp.task('watch', function() {
  gulp.watch(config.css.src, ['css']);
  gulp.watch(config.js.src, ['js']);
});

// Default Task
gulp.task('default', ['watch']);