const fs = require("fs");
const input = fs.readFileSync(0).toString().split(' ').map(Number);

input.sort((a, b) => a - b);

console.log(...input);