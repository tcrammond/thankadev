var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
  return gulp.src('public/**.**')
    .pipe($.copy('dist/'))
    .pipe(uglify())             // Minify any javascript sources
    .pipe(rev())                // Rename the concatenated files
    .pipe(revReplace())         // Substitute in new filenames
  ;
});