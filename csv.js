const Reader = require("./csv/Read");
const Processor = require("./csv/Processor");
const Table = require("./csv/Table");
const HtmlParse = require("./csv/HtmlParse");
const Write = require("./csv/Write");
const PDFWrite = require("./csv/PDFWrite");
const r = new Reader();
const w = new Write();
async function main(){
	var data = await  r.Reader("./sallers.csv");
	var dataProcess = Processor.Process(data);
	var users = new Table(dataProcess)
	console.log(users);
	var html = await HtmlParse.Parse(users);
	w.Write(Date.now() + ".html", html);
	PDFWrite.WritePdf(Date.now() + ".pdf", html);
	console.log(html);
}

main();