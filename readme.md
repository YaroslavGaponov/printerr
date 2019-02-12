PrintErr
===========================

print information about the place where the error occurred


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