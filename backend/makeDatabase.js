const fs = require('fs-extra')


function readTextFile(file) {

   return fs.readFileSync(file, 'UTF-8');
}

var data = readTextFile("/Users/alec/Downloads/parser/Schadensmeldung (100)/Schadensmeldung (1).txt");

data = data.trim();
data = data.replace("Ihre Daten", "");
data = data.replace("Angaben zu den Wiederherstellungskosten", "");
data = data.replace("Angaben zu den Wiederherstellungsmassnahmen", "");
var arr = data.split(":");
console.log(arr);
//console.log(data);