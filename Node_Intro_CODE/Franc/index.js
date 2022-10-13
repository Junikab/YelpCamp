
import { franc, francAll } from "franc";
import langs from "langs";
import colors from "colors"
const input = process.argv[2];
const langCode =franc(input);
if(langCode === 'und'){
    console.log("Undetermined Jibrish!".red)
}else{
const language = langs.where("3", langCode);

console.log(langCode);
console.log(`Our bet guess is: ${language.name}`.yellow)
}

