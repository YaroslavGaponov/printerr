const assert = require('assert');
const fs = require('fs');
const os = require('os');

const regex = /\([^:]+:[\d]+:[\d]+\)/gm;

function init(print = console.log) {
    assert(print);
    assert(print instanceof Function);

    return function(e, lines = 3) {
        assert(e);
        assert(e instanceof Error);
        assert(!Number.isNaN(lines));
        assert(lines > 0);

        let m;
        while ((m = regex.exec(e.stack)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            m.forEach(point => {
                const [file, line] = point.substr(1, point.length - 2).split(':');
                if (fs.existsSync(file)) {
                    const lineNo = +line - 1;
                    const program = fs.readFileSync(file, 'utf8').split(os.EOL);
                    program[lineNo] = `\x1b[42m${program[lineNo]}\x1b[0m <----- \x1b[31m${e}\x1b[0m`;
                    const message = [
                        `Error: ${file}:${line}`,
                        '...',
                        ...program.map((s, i) => `${i+1}\t${s}`).splice(Math.max(lineNo - (lines >> 1), 0), Math.min(program.length, lines)),
                        '...',
                    ];
                    print(message.join(os.EOL));
                }
            });
        }
    };
}

let printErr;

module.exports = fn => {
    if (printErr) return printErr;
    printErr = init(fn);
    process.on('uncaughtException', printErr);
    return printErr;
};