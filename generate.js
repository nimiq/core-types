#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

const args = process.argv.slice(2);
const gulpsourcesFile = args[0];

function help() {
    console.log("Usage:");
    console.log("node", path.basename(__filename), "./path/to/gulpsources.js\n");
}

// Validate given gulpsources.js exists
if (!gulpsourcesFile || !fs.existsSync(path.join(__dirname, gulpsourcesFile))) {
    console.error("ERROR: gulpsources.js not provided or not found!\n");
    help();
    process.exit(1);
}

const gulpsources = require(gulpsourcesFile);
const nimiqBase = path.dirname(gulpsourcesFile);

function pathFromHere(sourcePath) {
    return path.join(nimiqBase, sourcePath);
}

const sources = {
    platform: {
        browser: gulpsources.platform.browser.map(pathFromHere),
        node: gulpsources.platform.node.map(pathFromHere)
    },
    generic: gulpsources.generic.map(pathFromHere)
};

let dtsmakeCommand = path.join(__dirname, 'node_modules/dtsmake/bin/dtsmake');
    dtsmakeCommand += ` --src ${sources.platform.browser.concat(sources.generic).join(',')}`;
    dtsmakeCommand += ` --dist Nimiq-WIP`;

child_process.exec(dtsmakeCommand, {maxBuffer: 1000000 * 2048}, (err, stdout, stderr) => {
    if (err) {
        console.warn("[ERR] dtsmake error");
        console.error(err.toString());
        return;
    }
    else if (stderr) {
        console.warn("[ERR] dtsmake error");
        console.error(stderr.toString());
        return;
    }
    else {
        console.log(stdout.toString());
    }
});
