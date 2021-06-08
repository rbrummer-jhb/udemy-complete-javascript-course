'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;

    const convertToCamelCase = function(text) {
        const splitLines = text.split('\n');
        const trimLines = [];
        const noUnderscoreLines = [];
        const camelCameLines = [];
        const padLines = [];
        const emojiLines = [];

        for (let line of splitLines) {
            trimLines.push(line.trim());
        }
        
        for (let line of trimLines) {
            noUnderscoreLines.push( line.split('_') );
        }

        for (let line of noUnderscoreLines) {
            const [first, second] = line;
            camelCameLines.push(( first.toLowerCase() + second[0].toUpperCase() + second.slice(1) ));
        }

        for (let line of camelCameLines) {
            padLines.push( line.padEnd(20, ' ') );
        }

        for (let i = 0; i < padLines.length; i++) {
            emojiLines.push( padLines[i] + '✅'.repeat(i+1) );
        }

        for (let line of emojiLines) {
            console.log(line);
        }
    }
    convertToCamelCase(text);
});

// LECTURER'S SOLUTION
// document.querySelector('button').addEventListener('click', function () {
//     const text = document.querySelector('textarea').value;
//     const rows = text.split('\n');

//     for (const [i, row] of rows.entries()) {
//         const [first, second] = row.toLowerCase().trim().split('_');
//         const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//         console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
//     }
// });