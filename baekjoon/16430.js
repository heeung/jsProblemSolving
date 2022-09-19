const fs = require("fs");
const input = fs.readFileSync(0).toString().split(' ').map(Number);

const ans1 = input[1] - input[0];

console.log(ans1.toString() + ' ' + input[1])