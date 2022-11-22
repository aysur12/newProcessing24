const { parallel, series } = require('gulp');
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(ghPages())
});

const { views, clean, server, styles, images, fonts, scripts, svgSprite } = require('./gulp/tasks');

const build = series(clean, parallel(views, styles, scripts, fonts, images, svgSprite));
const start = series(build, server);

module.exports = {
  start,
  build,
}
