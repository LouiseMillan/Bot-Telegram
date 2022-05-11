const fs = require("fs");

class Reader{
    static readJsonFile(pathToJSON){
        const rawdata = fs.readFileSync(pathToJSON);
        return JSON.parse(rawdata);
    }    
}

module.exports = Reader;