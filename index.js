const fs = require('fs');

fs.readFile("./user.json", {encoding: 'utf-8'}, (erro, data) => {
	if(erro){
		console.log("error");
	}else{
		console.log(JSON.parse(data));
	}
});

// fs.writeFile("./user.json.txt", "New data", (err) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		fs.readFile("./lucasDSBR.txt", {encoding: 'utf-8'}, (erro, data) => {
// 		if(erro){
// 			console.log("error");
// 		}else{
// 			console.log(data);
// 		}});
// 	}
// });