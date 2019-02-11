# @nimiq/core-types

> ## Deprecation Warning
> Release v1.4.2 of this package is the last release of @nimiq/core-types,
> because the types are now included in the
> [@nimiq/core](https://www.npmjs.com/package/@nimiq/core) package.

This package provides Typescript types for the Nimiq core library.

A global namespace 'Nimiq' is declared.

## Installation

```bash
npm install --save-dev @nimiq/core-types
```

or

```bash
yarn add --dev @nimiq/core-types
```

## Usage

Add a .d.ts file to your project folder, e.g. `Nimiq.d.ts`, and make sure it is
included in your `.tsconfig`. That file should contain:

```js
// tslint:disable-next-line no-reference
/// <reference path="./node_modules/@nimiq/core-types/Nimiq.d.ts" />
```
