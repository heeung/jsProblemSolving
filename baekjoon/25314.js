const fs = require("fs");
const input = fs.readFileSync(0).toString();

const N = Number(input);
let str = "";

for (let i = 0 ; i < N / 4 ; i++){
    str = str + 'long ';
}
str = str + 'int';
console.log(str);