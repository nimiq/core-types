# @nimiq/core types

This package provides Typescript types for the Nimiq core library at http://cdn.nimiq.com/web.js.

A global namespace 'Nimiq' is declared.

# Install:
````
npm install --save-dev @nimiq/core-types
````
or
````
yarn add --dev @nimiq/core-types
````

# Usage:
Add a .d.ts file to your project folder, e.g. `Nimiq.d.ts`, and make sure it is included in your `.tsconfig`. That file
should contain:
````
// tslint:disable-next-line no-reference
/// <reference path="./node_modules/@nimiq/core-types/Nimiq.d.ts" />

````
