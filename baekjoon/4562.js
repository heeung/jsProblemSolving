const fs = require("fs");

const input = fs.readFileSync('dev/stdin').toString();

if (Number(input) === 0){
    console.log('YONSEI');
}else if (Number(input) === 1){
    console.log('Leading the Way to the Future');
}