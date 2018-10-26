declare namespace ElectronPath {
  interface IEPath {
    readonly app: any;
    readonly appPath: string;
    unpackedPath: string;
    appPackageDir: string;
    getUnpackedPath(): string;
    getAppPackageDir(): string;
  }

  class EPath implements IEPath {
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
