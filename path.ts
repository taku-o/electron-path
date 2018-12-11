'use strict';
const electron = require('electron');
var _path, path = () => { _path = _path || require('path'); return _path; };

const app = electron.app || electron.remote.app;
const appPath = app.getAppPath();

let unpackedPath:string;
export function getUnpackedPath(): string {
  unpackedPath = unpackedPath || app.isPackaged()?
    appPath.replace('app.asar', 'app.asar.unpacked'):
    appPath;
  return unpackedPath;
}

let appPackageDir:string;
export function getAppPackageDir(): string {
  appPackageDir = app.isPackaged()?
    path().dirname(path().dirname(path().dirname(appPath))):
    appPath;
  return appPackageDir;
}

