const fs = require('fs');

fs.readFile(process.argv[2], "utf-8", (error,buffer)=>{
    let lines = buffer.split('\n');
    console.log(parseInt(lines.length)-1);
})