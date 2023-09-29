const fs = require("fs");
const util = require("util");
class Reader {
	constructor(){
		this.reader = util.promisify(fs.readFile);
	}
	async Reader(filePath){
		try{
			return await this.reader(filePath, "utf-8");
		}catch(err){
			return undefined;
		}
	}
}

module.exports = Reader;