var exec = require('cordova/exec');

module.exports.add == function(arg0, success, error){
    exec(success, error, 'PictureExif', 'add', [arg0]);
}
module.exports.substract == function(arg0, success, error){
    exec(success, error, 'PictureExif', 'substract', [arg0]);
}

