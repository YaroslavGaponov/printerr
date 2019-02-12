const printErr = require('./index')();

console.log();

try {
    throw new Error('error!!!');
} catch (e) {
    printErr(e, 5);
}

console.log();