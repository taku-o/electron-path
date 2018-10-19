declare namespace ElectronPath {
  interface IPath {
    readonly app: any;
    readonly appPath: string;
    unpackedPath: string;
    appPackageDir: string;
    getUnpackedPath(): string;
    getAppPackageDir(): string;
  }

  class Path implements IPath {
    constructor();
    readonly app: any;
    readonly appPath: string;
    unpackedPath: string;
    appPackageDir: string;
    getUnpackedPath(): string;
    getAppPackageDir(): string;
  }
}

declare module 'electron-path' {
  export = ElectronPath;
}
