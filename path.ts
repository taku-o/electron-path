'use strict';
const electron = require('electron');
var _path, path = () => { _path = _path || require('path'); return _path; };

export class EPath implements ElectronPath.IEPath {
  app: any;
  appPath: string;
  unpackedPath: string;
  appPackageDir: string;

  constructor() {
    this.app = electron.app || electron.remote.app;
    this.appPath = this.app.getAppPath();
  }

  getUnpackedPath(): string {
    this.unpackedPath = this.unpackedPath ||
      this.app.isPackaged?
        this.appPath.replace('app.asar', 'app.asar.unpacked'):
        this.appPath;
    return this.unpackedPath;
  }

  getAppPackageDir(): string {
    this.appPackageDir = this.app.isPackaged?
      path().dirname(path().dirname(path().dirname(this.appPath))):
      this.appPath;
    return this.appPackageDir;
  }
}
