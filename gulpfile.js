var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("Hooray! Created a Gulp task.")
});

gulp.task('html', function(){
	console.log("Somthing useful happening with our html file.");
});

gulp.task('styles', function(){
	console.log("Imagine something cool happening with our css file.");
});

gulp.task('watch', function(){

	watch('index.html', function(){
		gulp.start('html');
	});
	watch('./app/styles/**/*.css', function(){
		gulp.start('styles');
	});
});