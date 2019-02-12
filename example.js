const printErr = require('./index');

try {
    throw new Error('error!!!');
} catch (e) {
    printErr(e);
}