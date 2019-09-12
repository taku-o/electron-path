electron-path -- npm module to get electron path.
===========================================

## Description

get electron application path,
or get unpackedPath.

## Install

```bash
npm install @taku-o/electron-path
````

## Usage

As a node module:

```js
const epath = require('@taku-o/electron-path');

const packagePath = epath.getAppPackageDir();
const unpackedPath = epath.getUnpackedPath();
```

