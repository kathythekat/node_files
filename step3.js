const fsP = require('fs').promises;
const axios = require("axios");


async function processPath(path, outputPath='') {
    try {
        let contents = null;
        if(path.slice(0,4) === 'http'){
            contents = await axios.get(path);
            
        } else {
            contents = await fsP.readFile(path, "utf8");
        }
        if(outputPath){
            await fsP.writeFile(outputPath, contents.data, "utf8");
        } else {
            console.log(contents);
        }  
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
  }



const [fArg, sArg, tArg] = process.argv.slice(2,5);

if(fArg === '--out'){
    processPath(tArg, sArg);
}
else {
    processPath(fArg);
}