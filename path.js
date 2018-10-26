'use strict';
exports.__esModule = true;
var electron = require('electron');
var _path, path = function () { _path = _path || require('path'); return _path; };
var app = electron.app || electron.remote.app;
var appPath = app.getAppPath();
var unpackedPath;
function getUnpackedPath() {
    unpackedPath = unpackedPath || app.isPackaged ?
        appPath.replace('app.asar', 'app.asar.unpacked') :
        appPath;
    return unpackedPath;
}
exports.getUnpackedPath = getUnpackedPath;
var appPackageDir;
function getAppPackageDir() {
    appPackageDir = app.isPackaged ?
        path().dirname(path().dirname(path().dirname(appPath))) :
        appPath;
    return appPackageDir;
}
exports.getAppPackageDir = getAppPackageDir;
