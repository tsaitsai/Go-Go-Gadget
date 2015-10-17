//dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
//create *.js.map file
var sourcemaps = require('gulp-sourcemaps');
//slam multiple *.js files together
var concat = require('gulp-concat');
//shrink code to be smaller for compy
var uglify = require('gulp-uglify');
var uglifyCss = require('gulp-minify-css');
var jade = require('gulp-jade');
//when gulp is run it will run these processes by default
gulp.task('default', ['process-js',
                      'process-css',
                      'process-angular',
                      'process-angular-material-js',
                      'process-angular-material-css',
                      'process-angular-animate',
                      'process-angular-aria',
                      'process-angular-route',
                      'process-jade',
                      'process-images'],
                      function(){
                        gutil.log('Gulped!');
});

gulp.task('process-js', function(){
  return gulp.src('./client/javascripts/*.js')
  .pipe(sourcemaps.init())
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('process-css', function(){
  return gulp.src('./client/stylesheets/*.css')
  .pipe(sourcemaps.init())
  .pipe(uglifyCss())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/stylesheets'));
});
gulp.task('process-angular', function(){
  return gulp.src('./node_modules/angular/angular.min.*')
  .pipe(gulp.dest('./public/vendors/angularjs'));
});
gulp.task('process-angular-animate', function(){
  return gulp.src('./node_modules/angular-animate/angular-animate.min.*')
  .pipe(gulp.dest('./public/vendors/angularjs'));
});
gulp.task('process-angular-material-js', function(){
  return gulp.src('./node_modules/angular-material/angular-material.min.js')
  .pipe(gulp.dest('./public/vendors/angularjs'));
});
gulp.task('process-angular-material-css', function(){
  return gulp.src('./node_modules/angular-material/angular-material.min.css')
  .pipe(gulp.dest('./public/vendors/angularcss'));
});
gulp.task('process-angular-aria', function(){
  return gulp.src('./node_modules/angular-aria/angular-aria.min.*')
  .pipe(gulp.dest('./public/vendors/angularjs'))
});
gulp.task('process-jade', function(){
  return gulp.src('./client/partials/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./public/views'))
});
gulp.task('process-angular-route', function(){
  return gulp.src('./node_modules/angular-route/angular-route.min.*')
  .pipe(gulp.dest('./public/vendors/angularjs'))
});
gulp.task('process-images', function(){
  return gulp.src('./client/images/*.png')
  .pipe(gulp.dest('./public/images'))
});
// gulp.task('process-private-views', function(){
//   return gulp.src('./client/private/*.jade')
//   .pipe(jade())
//   .pipe(gulp.dest('./private/views'))
// });
