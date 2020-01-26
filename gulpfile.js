const gulp = require("gulp");                             // gulp core
const sass = require('gulp-sass');                        // sass compiler
const browserSync = require('browser-sync').create();     // inject code to all devices


const autoprefixer = require('gulp-autoprefixer');       // sets missing browserprefixes
const  csso = require('gulp-csso');                        // minify the css files
// const cmq = require('gulp-combine-mq');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const del = require('del');

const gulpif = require('gulp-if');
const useref = require('gulp-useref');

const imagemin = require('gulp-imagemin'),
       pngquant = require('imagemin-pngquant'),            // minify png-format images
     spritesmith = require('gulp.spritesmith');

const changed = require('gulp-changed'),
      options = {removeComments: false};


/*********************************************/
/*WATCHER (WATCHING FILE CHANGES)*/
/*********************************************/

function styles() {
    return gulp.src('./app/sass/**/*')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(csso())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
}



function scripts() {
    return gulp.src('./app/js/*.js')                 // get the files
        .pipe(browserSync.stream())
    // browsersync stream
}


function fonts() {
    return gulp.src('./app/fonts/**/*')                 // get the files
        .pipe(gulp.dest('dist/fonts'));                 // where to put the files
}

/*********************************************/
/*LIBS TASKS (PERSONAL DEVELOPER LIBS)*/
/*********************************************/

function libs() {
    return gulp.src('./app/libs/**/*')                  // get the files
        .pipe(gulp.dest('dist/libs'));                  // where to put the files
}

function extrass () {
    return gulp.src([                                   // get the files
        'app/*.html'                                   // except '.html'
    ]).pipe(gulp.dest('dist'));                         // where to put the files
}



function buildSprite() {
    var spriteData = gulp.src('./app/image/sprite/*.*')
        .pipe(spritesmith({
            imgName: '../image/sprite.png',
            cssName: '_sprite.scss',
            cssFormat: 'scss',
            padding: 5
        }));

    spriteData.img.pipe(gulp.dest('./app/image'));
    return spriteData.css.pipe(gulp.dest('./app/sass/components'));
}


function sprite(done) {
    buildSprite().on('end', done);
}



function images() {
    return gulp.src('./app/image/**/*')                   // get the files
        .pipe(imagemin({                                // minify images

            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }, {
                cleanupIDs: false
            }],
            use: [pngquant({                            // minify png-format images
                quality: '60-70',
                speed: 4
            })],
            interlaced: true

        }))
        .pipe(gulp.dest('dist/image'));                   // where to put the files
}



function watch(){
    browserSync.init({
        server:{
            baseDir: "./app/"
        }
    });
    gulp.watch('./app/sass/**/*.scss', styles);
    gulp.watch('./app/index.html').on('change', browserSync.reload);
    gulp.watch('./app/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./app/image/sprite/*.*').on('change', browserSync.reload);

}


function clean () {
   return del(['dist/**', '!dist'])
}




function finished() {

    return gulp.src('app/*.html')
        .pipe(gulpif('app/*.js', uglify()))   // uglify js-files
        .pipe(gulpif('app/*.css', csso()))    // minify css-files
        .pipe(useref())
        .pipe(gulp.dest('./dist'));
}



gulp.task('extrass', extrass);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('libs', libs);
gulp.task('fonts', fonts);

gulp.task('sprite', sprite);
gulp.task('images', images);

gulp.task('clean', clean);
gulp.task('finished', finished);

gulp.task('watch', watch);


const standartWatch = gulp.parallel(watch);
gulp.task('default', standartWatch);



gulp.task('build', gulp.series('clean', 'styles', 'scripts', 'images', 'fonts', 'libs', 'extrass', 'finished'));
