const fs = require('fs');

let dir = process.argv[2];
let filter = process.argv[3];

fs/fs.readdir(dir,(error,files)=>{
    for(let i=0;i<files.length;i++){
        let fileExtension = files[i].split('.')[1];

        if(fileExtension === filter)
            console.log(files[i]);
    }
});
