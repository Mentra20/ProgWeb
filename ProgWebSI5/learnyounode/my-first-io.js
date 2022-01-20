const fs = require('fs');

let buffer = fs.readFileSync(process.argv[2], "utf-8");
let lines = buffer.split('\n');

console.log(parseInt(lines.length)-1);