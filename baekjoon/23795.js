const fs = require("fs");
const input = fs.readFileSync(0).toString().split('\n');

let i = 0;
let sum = 0;
while (Number(input[i]) !== -1){
    sum = sum + Number(input[i]);
    i++;
}
console.log(sum);