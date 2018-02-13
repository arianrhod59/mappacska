var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("Hooray! Created a Gulp task.")
});

gulp.task('html', function(){
	console.log("Somthing useful happening with our html file.");
});

gulp.task('watch', function(){

	watch('index.html', function(){
		gulp.start('html');
	});
});