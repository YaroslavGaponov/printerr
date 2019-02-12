const fs = require('fs');
const os = require('os');
const regex = /\([^:]+:[\d]+:[\d]+\)/gm;

function printErr(e) {
    const result = regex.exec(e.stack);
    if (result !== null) {
        const [file, line] = result[0].substr(1, result[0].length - 2).split(':');
        const code = fs.readFileSync(file, 'utf8').split(os.EOL);
        code[+line - 1] = `\x1b[31m${code[+line - 1]}\x1b[0m <----- ${e}`;
        const info = [
            `Error: ${file}:${line}`,
            '...',
            ...code.splice(+line - 2, 3),
            '...',
        ];
        console.log(info.join(os.EOL));
    }
}

module.exports = printErr;