const fs = require("fs");
const util = require("util");


class Write{
	constructor(){
		this.write = util.promisify(fs.writeFile);
	}

	async Write(filename, data){
		try{
			return await this.write(filename, data);
		}catch(err){
			return false;
		}
	}
}

module.exports = Write;