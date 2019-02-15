PrintErr
===========================

print information about the place where the error occurred


![printerr](https://raw.githubusercontent.com/YaroslavGaponov/printerr/master/printerr.jpg "printerr")


## Example #1

Print information for all uncaughtException

```javascript
require('./index')();

throw new Error('error!!!');
```

### Example #2

Print information for custom exception

```javascript
const printErr = require('printerr')();

try {
    throw new Error('error!!!');
} catch (e) {
    printErr(e);
}
```

### Example with custom print function

```javascript
require('./index')(console.debug);

throw new Error('error!!!');
```