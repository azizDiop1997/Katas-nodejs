const { readFileSync } = require("fs");
const process = require('node:process');

console.log(JSON.parse(readFileSync('./input.json', 'utf-8')).find(value => value.id == process.argv[2]).name)

