console.log(' * Example #1: print information about custom exception ');
const printErr = require('./index')();
try {
    throw new Error('error #1');
} catch (e) {
    printErr(e);
}
console.log();


console.log(' * Example #2: print information about uncaughtException');
require('./index')();
throw new Error('error #2');