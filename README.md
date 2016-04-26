# gulp-html-minifier

#### Minify HTML with html-minifier tools

### example

    var htmlMinifier = require('gulp-html-minifier');

    gulp.task('html-mini', function(){
        return gulp.src('./src/views/**/*.html')
            .pipe(htmlMinifier({
                removeComments: true,
                collapseWhitespace: true,
                removeTagWhitespace: true
            }))
            .pipe(gulp.dest('./views'))
    });
    
### options
    
please reference html-minifier [options]:https://github.com/kangax/html-minifier#minification-comparison

