'use strict';
exports.__esModule = true;
var electron = require('electron');
var _path, path = function () { _path = _path || require('path'); return _path; };
var EPath = /** @class */ (function () {
    function EPath() {
        this.app = electron.app || electron.remote.app;
        this.appPath = this.app.getAppPath();
    }
    EPath.prototype.getUnpackedPath = function () {
        this.unpackedPath = this.unpackedPath ||
            this.app.isPackaged ?
            this.appPath.replace('app.asar', 'app.asar.unpacked') :
            this.appPath;
        return this.unpackedPath;
    };
    EPath.prototype.getAppPackageDir = function () {
        this.appPackageDir = this.app.isPackaged ?
            path().dirname(path().dirname(path().dirname(this.appPath))) :
            this.appPath;
        return this.appPackageDir;
    };
    return EPath;
}());
exports.EPath = EPath;
