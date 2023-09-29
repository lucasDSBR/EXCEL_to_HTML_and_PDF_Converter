var pdf = require("html-pdf");

class PDFWrite{
	static WritePdf(filename, html){
		pdf.create(html, {}).toFile(filename, (err) => {});
	}
}

module.exports = PDFWrite;