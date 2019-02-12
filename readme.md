PrintErr
===========================

print information about the place where the error occurred


![printerr](https://raw.githubusercontent.com/YaroslavGaponov/printerr/master/printerr.jpg "printerr")

### Example

```javascript
const printErr = require('printerr')();

try {
    throw new Error('error!!!');
} catch (e) {
    printErr(e);
}
```

### Result

```sh
$ node ./example.js 
Error: /home/gap/projects/errinfo/example.js:4
...
try {
    throw new Error('error!!!'); <----- Error: error!!!
} catch (e) {
...
```