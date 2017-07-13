var fs = require("fs");
var archivo = fs.readFileSync(process.argv[2]);
var text= archivo.toString();
var espacio= text.split('\n');
console.log(espacio.length-1);
