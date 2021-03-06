// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint')
, changed = require('gulp-changed')
, imagemin = require('gulp-imagemin')
, uglify = require('gulp-uglify')
, minifyCSS = require('gulp-minify-css')
, compass = require('gulp-compass')
, livereload = require('gulp-livereload')
, concat = require('gulp-concat')
, stripDebug = require('gulp-strip-debug'),
  plumber = require('gulp-plumber');


var paths = {
  scripts: './public/js/*.js',
  images: './public/images/**/*',
  sass: './public/scss/**/*'
};


// JS concat, strip debugging and minify
gulp.task('scriptsm', function() {
    gulp.src([
        './public/js/lib/jquery-1.11.0.min.js',
        './public/js/lib/underscore.js',
        './public/js/lib/backbone-min.js',
        './public/js/backbone.localStorage.js',
        './public/js/backbone-forms.min.js',
        './public/js/models/page.js',
        './public/js/models/project.js',
        './public/js/collections/pages.js',
        './public/js/collections/projects.js',
        './public/js/views/app.js',
        './public/js/views/project.js',
        './public/js/views/page.js',
        './public/js/routers/router.js',
        './public/js/app.js'
      ])
    .pipe(concat('script.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./public/build/js/'));
});


// JS hint task
gulp.task('scripts', function() {
  gulp.src('./public/js/index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// minify new images
gulp.task('images', function() {
  var imgSrc = './public/images/**/*',
      imgDst = './build/images';
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});


// Styles
gulp.task('styles', function() {
  return gulp.src('./public/scss/**/*')
    .pipe(plumber())
    .pipe(compass({
        sass: './public/scss',
        css: './public/css'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});


// Rerun the task when a file changes
gulp.task('watch', function () {
  var server = livereload();
  gulp.watch('*.html', function(evt) {
      server.changed(evt.path);
  });
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.scripts, ['scriptsm']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.sass, ['styles']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'images', 'styles', 'watch']);