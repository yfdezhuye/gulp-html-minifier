var htmlMinifier = require('html-minifier').mifiy;
var gutil = require('gulp-util');
var through = require('through2');

module.exports = function (opt){
    return through.obj(function(file, enc, cb){
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            return cb(new gutil.PluginError('gulp-html-minifier', 'Streaming not supported'));
        }
        
        file.contents = new Buffer(htmlMinifier(String(file.contents), opt));
        cb(null, file);
    });
}
