const Reader = require("./csv/Read");
const Processor = require("./csv/Processor");
const r = new Reader();

async function main(){
	var data = await  r.Reader("./sallers.csv");
	var dataProcess = Processor.Process(data)
	console.log(data);
}

main();