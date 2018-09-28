const fs = require('fs');
const removeComments = require('./tools/removeComments');
const blockify = require('./tools/blockify');
const saveTemp = require('./tools/saveTemp');

let file = fs.readFileSync(__dirname + '/test.txt', 'utf8');

let noComments = removeComments(file);
let ast = blockify(noComments);

saveTemp(ast);


console.log(ast);