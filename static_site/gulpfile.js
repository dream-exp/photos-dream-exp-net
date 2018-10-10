var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync");
var plumber = require('gulp-plumber'); 
var ejs = require('gulp-ejs'); 
var rename = require('gulp-rename');
var fs = require('fs');

gulp.task('server', function () {
  browser({
    notify: false,
    server: {
      baseDir: "./public"
    }
  })

  gulp.watch('sass/**/*.scss', ["sass"]);
  gulp.watch('sass/**/*.scss', browser.reload);
  gulp.watch('ejs/**/*.ejs', ["ejs"]);
  gulp.watch('ejs/*.ejs', ["ejs"]);
  gulp.watch('ejs/**/*.ejs', browser.reload);
  gulp.watch('ejs/*.ejs', browser.reload);
  gulp.watch('**/**.js', browser.reload);
});

gulp.task("sass", function() {
    gulp.src("sass/**/*scss")
    	.pipe(plumber({ // OK
	      errorHandler: function (error) {
	        console.log(error.message);
	        this.emit('end');
	    }}))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("public/css"))
});

gulp.task("ejs", function() {
    var json = JSON.parse(fs.readFileSync("./package.json"));

    gulp.src(
        ["./ejs/**/*.ejs",'!' + "./ejs/**/_*.ejs"]
    )
        .pipe(plumber())
        .pipe(ejs())
        .pipe(ejs(json, {"ext": ".html"}))
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest("public/"))
});
