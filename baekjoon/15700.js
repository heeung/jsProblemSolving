const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(BigInt);

const num = BigInt(input[0] * input[1] / 2n);

console.log(num.toString());