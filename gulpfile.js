/**
 * Gulp configuration file to build, test, compile Nemo Plugins
 */

/**
 * GULP LIBARIES -----------------------------
 */

var gulp = require('gulp'),
    webpack = require('webpack'),
    webpackStream = require("webpack-stream"),
    del = require('del'),
    xmledit = require('gulp-edit-xml'),
    jedit = require('gulp-json-editor'),
    shell = require('gulp-shell'),
    runSequence = require('run-sequence'),

    //import package.json
    package = require('./package.json'),
    //import the webpack config file
    webpackConfig = require('./webpack.config.js');


/**
 * GULP TASKS -----------------------------
 */
gulp.task('node-modules', () => {
    gulp.src('./src/js-node/core.js')
      .pipe(webpackStream(webpackConfig), webpack)
      .pipe(gulp.dest('./dist/js-node'));
});

/* Minify browser JS and copy to destination */
gulp.task('browser-jsmin', function() {
    return gulp.src('./src/js/**/*')
        .pipe(gulp.dest('./dist/js'));
});

/* Minify dreamweaver javascript (JSX) and copy to destination */
gulp.task('dw-jsxmin', function() {
    return gulp.src('./src/jsx/*.jsx')
        .pipe(gulp.dest('./dist/jsx'));
});

/* Update viewer html file and copy to destination */
gulp.task('viewer', function() {
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
});

/* Update viewer html file and copy to destination */
gulp.task('css', function() {
    return gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./dist/css'));
});

/* Clean ./dist folder */
gulp.task('clean', function() {
    del('dist');
    del('./bin/com.olo.NemoMenu-' + 
    package.version + '.zxp');
});

/* Update version of package.json in CSXS/manifest.xml (Adobe app dependency) and copy
    to destination */
gulp.task('manifest', function() {
    gulp.src('./src/CSXS/manifest.xml').pipe(xmledit(function(xml) {
        xml.ExtensionManifest.ExtensionList[0].Extension[0].$.Version = package.version;
        xml.ExtensionManifest.$.ExtensionBundleVersion = package.version;
        return xml;
    })).pipe(gulp.dest('./dist/CSXS'));
});

/* Create `package.json` to use application as node module and copy to destination */
gulp.task('package', function() {
    // return gulp.src('./package.json')
    //     .pipe(jedit(function(json) {
    //         json.main = "src/index.html";
    //         return json;
    //     }))
    //     .pipe(gulp.dest('./dist/'));
});

// /* Create binary package for Extension Manager with use of ZXPSignCmd application */
// Do not remove bin folder, this gives exit code 3. //

gulp.task('sign', 
     shell.task('ZXPSignCmd -sign dist bin/com.olo.NemoMenu-' + 
     package.version + '.zxp cert.p12 universityoftwente -tsa http://sha1timestamp.ws.symantec.com/sha1/timestamp') // don't put the semicolon here or it will break!
);

// /**
//  * GULP KEY TASKS -----------------------------
//  */

/* Build the application (both Adobe CEP as node module) */
gulp.task('build', function() {
    runSequence('manifest', 'package', 'css', 'node-modules', 'browser-jsmin', 'dw-jsxmin', 'viewer');
});

// /* Set default task to watch task */
gulp.task('default', ['watch']);