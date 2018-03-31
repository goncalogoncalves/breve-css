var gulp = require('gulp');
var concat = require('gulp-concat');
var refresh = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');
var rename = require("gulp-rename");
var lr = require('tiny-lr');
var server = lr();


gulp.task('styles', function() {
	gulp.src(['src/reset/reset.css','src/base/base.css','src/button/button.css','src/form/form.css','src/grid/grid.css','src/table/table.css','src/utils/utils.css','src/list/list.css','src/type/type.css'])
	.pipe(concat('breve.css'))
	.pipe(minifyCSS())
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('dist'))
	.pipe(refresh(server));

	gulp.src(['src/reset/reset.css','src/base/base.css','src/button/button.css','src/form/form.css','src/grid/grid.css','src/table/table.css','src/utils/utils.css','src/list/list.css','src/type/type.css'])
	.pipe(concat('breve.css'))
	.pipe(gulp.dest('dist'))
	.pipe(refresh(server));
})

gulp.task('lr-server', function() {
	server.listen(35729, function(err) {
		if(err) return console.log(err);
	});
})

gulp.task('default', function() {
	gulp.run('lr-server', 'styles');

	gulp.watch('src/**/*', function(event) {
		gulp.run('styles');
	})
})