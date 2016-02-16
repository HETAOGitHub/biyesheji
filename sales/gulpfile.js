//gulp 2015-08-04
/**
 * author lgzhang08@tfedu.net
 *
 * @param {String} ext
 * @param {String} name
 * @param {Object} opt
 */
'use strict';

var gulp = require('gulp');
var g = require('gulp-load-plugins')({lazy: false});
var inject = require('gulp-inject');
var browserSync = require('browser-sync');
var connect = require('gulp-connect');
var historyApiFallback = require('connect-history-api-fallback');
var reload = browserSync.reload;

var config = {
    paths: {
        html: {
            src:  ["src/**/*.html"],
            dest: "build"
        },
        js: {
            src:  ["src/**/*.js",'!./src/lib/angular.min.js','!./src/lib/jquery.min.js','!./src/js/app.js'],
            dest: "build/js"
        },
        css: {
            src: ["src/css/**/*.css"],
            dest: "build/css"
        },
        assets: {
            src: ["src/assets/**/*.png", "src/assets/**/*.jpg"],
            dest: "build/assets"
        }
    }
}
//打包config
var distConfig = {
    paths: {
        libjs: {
            src:  ["src/lib/angular.min.js","src/lib/jquery.min.js","src/lib/angular-resource.min.js","src/lib/angular-ui-router.min.js","src/lib/highcharts-ng.js","src/lib/highcharts.js","src/lib/smart-table.min.js","src/lib/ui-bootstrap-tpls-0.13.2.min.js"],
        },
        appjs: {
            src:  ["src/js/app.js","src/services/mainService.js","src/coms/area/areaCtrl.js","src/coms/details/detailsCtrl.js","src/coms/details/singleCtrl.js","src/coms/home/homeCtrl.js","src/coms/rank/rankCtrl.js"],
        },
        css: {
            src: ["src/css/bootstrap.min.css", "src/css/details.css", "src/css/font-awesome.min.css", "src/css/homepage.css", "src/css/ranking.css", "src/css/single.css", "src/css/tarea.css"],
            dest: "dist/css"
        },
        assets: {
            src: ["src/assets/**/*.png", "src/assets/**/*.jpg"],
            dest: "dist/assets"
        }
    }
}
 // 检查脚本
gulp.task('jscheck', function() {
    gulp.src(config.paths.js.src)
        .pipe(g.jshint())
        .pipe(g.jshint.reporter('default'));
});

// 合并，压缩js文件
gulp.task('minjs', function() {
    gulp.src(config.paths.js.src)
        .pipe(g.concat('app.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(g.rename('app.min.js'))
        .pipe(g.uglify())
        .pipe(gulp.dest('./dist'));
});

// 合并，压缩css文件
gulp.task('mincss', function() {
    gulp.src(config.paths.css.src)
        .pipe(g.concat('app.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(g.rename('app.min.css'))
        .pipe(g.cssmin())
        .pipe(gulp.dest('./dist'));
});

// 转移index.html到tmp目录下
gulp.task('html', function() {
    gulp.src('./src/index.html')
        .pipe(g.rename('tmp.html'))
        .pipe(gulp.dest('./tmp'));

});

// 打包
gulp.task('dist', function(){
    gulp.run('jscheck', 'minjs', 'mincss');
});

// 默认任务
gulp.task('watch',['inject'], function () {
  browserSync({
    notify: false,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: {
        baseDir:['src'],
        index: "index.html",
        middleware: [ historyApiFallback()]
    }
  });
  // gulp.watch(config.paths.css.src, ['inject']);
  // gulp.watch(config.paths.js.src,  ['inject']);
  gulp.watch([config.paths.html.src,config.paths.css.src,config.paths.js.src], ['inject']);
  gulp.watch([config.paths.html.src,'./src/index.html'], reload);
});

// 测试环境运行
gulp.task('server', function(){
    connect.server({
        port: '3000',
        root: './src',
        middleware: function(connect, opt) {
            return [ historyApiFallback({}) ];
        }
    });
});

// inject css js
gulp.task('inject', function(){
  return gulp.src('./src/index.html')
    .pipe(inject(gulp.src(config.paths.js.src, {read: false}), {ignorePath: 'src'}))
    .pipe(inject(gulp.src(config.paths.css.src, {read: false}), {ignorePath: 'src'}))
    .pipe(gulp.dest('./src'))
})

gulp.task('default', ['inject', 'watch']);
